"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Link } from "@/i18n/routing";

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
            {t("title")}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-dark rounded-full mb-10" />
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-4">
            <ScrollReveal delay={0.1}>
              <p className="text-muted text-base leading-relaxed">
                {t("description")}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted text-base leading-relaxed">
                {t("description2")}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Button variant="outline" asChild>
                <Link href="/projects">
                  {t("cta")}
                </Link>
              </Button>
            </ScrollReveal>
          </div>

          <div className="md:col-span-2">
            <ScrollReveal delay={0.2} direction="right">
              <div className="relative">
                <div className="relative w-full aspect-square max-w-xs mx-auto rounded-xl overflow-hidden border border-border bg-surface">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center mb-3">
                        <span className="text-3xl font-bold text-primary">MH</span>
                      </div>
                      <p className="text-sm text-muted">Mohammad Hosseini</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 ring-1 ring-inset ring-primary/5 rounded-xl" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
