"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-primary mb-6 font-mono">404</div>
        <h1 className="text-2xl font-bold text-text mb-3">{t("title")}</h1>
        <p className="text-muted mb-8">{t("description")}</p>
        <Button asChild>
          <Link href="/">{t("cta")}</Link>
        </Button>
      </div>
    </div>
  );
}
