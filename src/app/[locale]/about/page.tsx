import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { constructMetadata } from "@/config/site";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SkillBadge } from "@/components/shared/SkillBadge";

export const metadata = constructMetadata({
  title: "About",
  path: "/about",
});

const skillsData = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML/CSS", "TailwindCSS", "Next.js", "Redux"],
  },
  {
    category: "Backend & Tools",
    items: ["Node.js", "Express", "Docker", "Git", "GitHub", "Linux"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Drizzle ORM", "Prisma"],
  },
  {
    category: "Other",
    items: ["REST APIs", "JWT", "Socket.io", "Figma", "Agile"],
  },
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-24 md:pt-28">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="About Me" subtitle="Get to know me better" />

          <div className="grid md:grid-cols-5 gap-12 items-start mb-20">
            <div className="md:col-span-3 space-y-4">
              <ScrollReveal delay={0.1}>
                <p className="text-muted text-base leading-relaxed">
                  I&apos;m a Computer Science graduate from Golestan University with a passion for building software that makes a difference. As a Frontend Engineer, I specialize in creating modern, performant web applications using React, TypeScript, and the latest web technologies.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-muted text-base leading-relaxed">
                  My approach combines clean architecture with thoughtful user experience design. I believe in writing maintainable code, following best practices, and continuously learning to stay at the cutting edge of web development.
                </p>
              </ScrollReveal>
            </div>

            <div className="md:col-span-2">
              <ScrollReveal delay={0.2} direction="right">
                <div className="relative w-full aspect-square max-w-xs mx-auto rounded-xl overflow-hidden border border-border bg-surface">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center mb-3">
                        <span className="text-3xl font-bold text-primary">MH</span>
                      </div>
                      <p className="text-sm text-muted">Mohammad Hosseini</p>
                      <p className="text-xs text-muted/60 mt-1">Frontend Engineer</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <SectionHeading title="Skills & Technologies" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
                  {group.category}
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
    </div>
  );
}
