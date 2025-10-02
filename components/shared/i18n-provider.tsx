"use client";

import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { Locale, dictionaries, defaultLocale, Dictionary } from "@/lib/i18n";

type I18nContextValue = {
  locale: Locale;
  t: (key: string) => string;
  setLocale: (l: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const COOKIE_KEY = "locale";

export function I18nProvider({
  initialLocale,
  children,
}: {
  initialLocale?: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale || defaultLocale);

  useEffect(() => {
    try {
      const stored = document.cookie
        .split(";")
        .map((c) => c.trim())
        .find((c) => c.startsWith(`${COOKIE_KEY}=`));
      if (stored) {
        const val = stored.split("=")[1] as Locale;
        if (val && dictionaries[val]) setLocale(val);
      }
    } catch {}
  }, []);

  const contextValue = useMemo<I18nContextValue>(() => {
    const dict: Dictionary =
      dictionaries[locale] || dictionaries[defaultLocale];
    const t = (key: string) => dict[key] ?? key;
    const setLocaleAndPersist = (l: Locale) => {
      if (!dictionaries[l]) return;
      document.cookie = `${COOKIE_KEY}=${l}; path=/; max-age=${
        60 * 60 * 24 * 365
      }`;
      setLocale(l);
    };
    return { locale, t, setLocale: setLocaleAndPersist };
  }, [locale]);

  return (
    <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
