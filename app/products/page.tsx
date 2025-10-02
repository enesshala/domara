"use client";

import { Navigation } from "@/components/shared/navigation";
import { Footer } from "@/components/shared/footer";
import { ProductHero } from "@/components/shared/products/product-hero";
import { CategoryNav } from "@/components/shared/products/category-nav";
import { AboutDeco } from "@/components/shared/products/about-deco";
// import { Partners } from "@/components/shared/products/partners";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useI18n } from "@/components/shared/i18n-provider";

function ProductsContent() {
  const { t } = useI18n();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "kitchen";

  return (
    <main className="min-h-screen">
      <Navigation />
      <CategoryNav activeCategory={category} />
      <ProductHero category={category} />
      <AboutDeco category={category} />
      {/* <Partners /> */}
      <Footer />
    </main>
  );
}

export default function ProductsPage() {
  const { t } = useI18n();
  return (
    <Suspense fallback={<div>{t("loading")}</div>}>
      <ProductsContent />
    </Suspense>
  );
}
