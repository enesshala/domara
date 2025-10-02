"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/DOMARA3.svg";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/shared/i18n-provider";
import type { Locale } from "@/lib/i18n";

export function Navigation() {
  const { t, locale, setLocale } = useI18n();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const delta = y - lastY.current;

      if (y < 10) {
        setHidden(false);
      } else if (delta > 6) {
        setHidden(true);
      } else if (delta < -6) {
        setHidden(false);
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [mobileOpen]);

  // Close menu on breakpoint change to md+
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!langRef.current) return;
      if (!langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const getFlag = (l: Locale) => (l === "en" ? "🇬🇧" : l === "sq" ? "🇦🇱" : "🇩🇪");

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 bg-black/80 backdrop-blur-xs"
    >
      <div className="flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Link
            href="/"
            className="text-sm font-light tracking-widest text-foreground uppercase"
          >
            <Image src={logo} alt="DOMARA" width={300} height={100} />
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 tracking-wider text-white">
          {(
            [
              { label: t("nav_home"), href: "/" },
              { label: t("nav_about"), href: "/about" },
              { label: t("nav_contact"), href: "/contact" },
              { label: t("nav_products"), href: "/products" },
            ] as const
          ).map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <Link
                href={item.href}
                className="hover:text-foreground transition-colors font-medium"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right-side controls: language dropdown (desktop) + mobile toggle */}
        <div className="flex items-center gap-2">
          <div ref={langRef} className="relative hidden md:block">
            <button
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-2 text-white/90 hover:text-white border border-white/20 rounded-md px-3 py-1"
              aria-haspopup="menu"
              aria-expanded={langOpen}
            >
              <span className="text-lg">{getFlag(locale)}</span>
              <span className="text-xs uppercase">{locale}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-md bg-white text-black shadow-lg z-[60] p-1">
                {(
                  [
                    { code: "en", label: "English", emoji: "🇬🇧" },
                    { code: "sq", label: "Shqip", emoji: "🇦🇱" },
                    { code: "de", label: "Deutsch", emoji: "🇩🇪" },
                  ] as const
                ).map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => {
                      setLocale(opt.code as Locale);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-md hover:bg-black/5 ${
                      locale === (opt.code as Locale) ? "font-medium" : ""
                    }`}
                    role="menuitem"
                  >
                    <span>{opt.emoji}</span>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              id="mobile-nav"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[72px] left-0 right-0 mx-0 bg-black text-white px-6 py-6 rounded-none shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="grid gap-4 text-base tracking-wider">
                {(
                  [
                    { label: t("nav_home"), href: "/" },
                    { label: t("nav_about"), href: "/about" },
                    { label: t("nav_contact"), href: "/contact" },
                    { label: t("nav_products"), href: "/products" },
                  ] as const
                ).map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="py-2 text-white/90 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Language selector (mobile) */}
              <div className="mt-6 flex gap-4">
                {(
                  [
                    { code: "en", emoji: "🇬🇧" },
                    { code: "sq", emoji: "🇦🇱" },
                    { code: "de", emoji: "🇩🇪" },
                  ] as const
                ).map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => {
                      setLocale(opt.code as Locale);
                      setMobileOpen(false);
                    }}
                    className={`text-2xl ${
                      locale === (opt.code as Locale)
                        ? "opacity-100"
                        : "opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`Switch language to ${opt.code}`}
                  >
                    {opt.emoji}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
