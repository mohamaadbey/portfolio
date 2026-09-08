"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex items-center gap-1 bg-surface border border-border rounded-lg p-0.5">
      {[
        { code: "en", label: "EN" },
        { code: "fa", label: "FA" },
      ].map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLocale(lang.code)}
          disabled={isPending}
          className={cn(
            "px-2.5 py-1 text-xs font-medium rounded-md transition-all duration-300",
            locale === lang.code
              ? "bg-primary text-background"
              : "text-muted hover:text-text"
          )}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
