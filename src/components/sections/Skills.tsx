"use client";

import { useTranslations } from "next-intl";
import { SkillBadge } from "@/components/shared/SkillBadge";
import { SectionHeading } from "@/components/shared/SectionHeading";

const skillsData = [
  {
    category: "frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML/CSS", "TailwindCSS", "Next.js", "Redux"],
  },
  {
    category: "backend",
    items: ["Node.js", "Express", "Docker", "Git", "GitHub", "Linux"],
  },
  {
    category: "database",
    items: ["PostgreSQL", "MySQL", "Drizzle ORM", "Prisma"],
  },
  {
    category: "other",
    items: ["REST APIs", "JWT", "Socket.io", "Figma", "Agile"],
  },
];

export function Skills() {
  const t = useTranslations("skills");

  return (
    <section className="section-padding bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={t("title")} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
                {t(group.category as "frontend")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <SkillBadge key={skill} name={skill} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
