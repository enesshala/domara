"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/shared/i18n-provider";

export function Footer() {
  const { t } = useI18n();
  const contentRef = useRef<HTMLDivElement>(null);
  const [spacerHeight, setSpacerHeight] = useState<number>(0);

  useEffect(() => {
    const measure = () => {
      if (contentRef.current) {
        setSpacerHeight(contentRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const footerLinks = [
    {
      title: t("footer_pages"),
      links: [
        { label: t("footer_home"), href: "/" },
        { label: t("footer_products"), href: "/products" },
        { label: t("footer_contact"), href: "/contact" },
      ],
    },
    {
      title: t("footer_categories"),
      links: [
        { label: t("footer_kitchen"), href: "/products?category=kitchen" },
        { label: t("footer_rooms"), href: "/products?category=rooms" },
        { label: t("footer_bath"), href: "/products?category=bathroom" },
        { label: t("footer_dining"), href: "/products?category=dining" },
      ],
    },
    {
      title: t("footer_company"),
      links: [
        { label: t("footer_about"), href: "/about" },
        { label: t("footer_careers"), href: "/contact" },
        {
          label: t("footer_location"),
          href: "https://maps.app.goo.gl/nAKLUw2qsCcWiRpn6",
          target: "_blank",
        },
      ],
    },
  ];

  return (
    <>
      <div
        aria-hidden
        className={spacerHeight ? undefined : "h-[420px]"}
        style={spacerHeight ? { height: spacerHeight } : undefined}
      />
      <footer
        ref={contentRef}
        className="fixed bottom-0 left-0 right-0 -z-10 bg-[#1a1410] py-12 md:py-20 text-white max-h-screen overflow-y-auto"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="flex justify-center items-center">
              <Image src="/DOMARA3.svg" alt="DOMARA" width={300} height={300} />
            </div>

            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-cream text-sm tracking-wider mb-6 font-light">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-cream/60 text-sm font-light hover:text-cream transition-colors"
                        target={l.target}
                      >
                        <motion.span
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {l.label}
                        </motion.span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/40 text-xs font-light">
              © 2025 DOMARA HOME. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/contact"
                className="text-cream/40 text-xs font-light hover:text-cream transition-colors"
              >
                {t("footer_privacy")}
              </Link>
              <Link
                href="/contact"
                className="text-cream/40 text-xs font-light hover:text-cream transition-colors"
              >
                {t("footer_terms")}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
