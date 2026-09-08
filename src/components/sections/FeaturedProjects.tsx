"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Link } from "@/i18n/routing";

const projects = [
  {
    titleKey: "project1",
    tags: ["React", "TypeScript", "PostgreSQL", "Drizzle ORM", "Express"],
    githubUrl: "https://github.com/mohammad/anbarchi",
  },
  {
    titleKey: "project2",
    tags: ["React", "Express", "PostgreSQL", "JWT", "Socket.io"],
    githubUrl: "https://github.com/mohammad/lms",
  },
];

export function FeaturedProjects() {
  const t = useTranslations("projects");

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={t("title")} />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.titleKey}
              title={t(`${project.titleKey}.title`)}
              subtitle={t(`${project.titleKey}.subtitle`)}
              description={t(`${project.titleKey}.description`)}
              tags={project.tags}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">
              {t("viewAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
