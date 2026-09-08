import { setRequestLocale } from "next-intl/server";
import { constructMetadata } from "@/config/site";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export const metadata = constructMetadata({
  title: "Experience",
  path: "/experience",
});

const experiences = [
  {
    role: "Frontend Engineer",
    company: "Freelance",
    period: "2023 - Present",
    description:
      "Developing modern web applications for various clients using React, TypeScript, and related technologies.",
    highlights: [
      "Built and deployed 10+ web applications for small to medium businesses",
      "Implemented responsive designs with 95%+ Lighthouse performance scores",
      "Integrated third-party APIs and payment gateways",
      "Mentored junior developers on React best practices",
    ],
  },
  {
    role: "Computer Science Graduate",
    company: "Golestan University",
    period: "2019 - 2023",
    description:
      "Graduated with a Bachelor's degree in Computer Science, specializing in software engineering and web technologies.",
    highlights: [
      "Thesis on modern web application architecture patterns",
      "Led university tech club workshops on web development",
      "Built multiple projects using React and Node.js",
    ],
  },
];

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-24 md:pt-28">
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Experience" subtitle="My professional journey" />

          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.role} delay={index * 0.15}>
                <div className="relative pl-8 pb-12 last:pb-0">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
                  <div className="absolute left-[-4px] top-1 w-[9px] h-[9px] rounded-full bg-primary shadow-[0_0_12px_rgba(100,255,218,0.3)]" />
                  <div className="absolute left-[-2px] top-1 w-[5px] h-[5px] rounded-full bg-primary animate-pulse" />

                  <div className="bg-surface border border-border rounded-xl p-6 hover:border-primary/20 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-text">{exp.role}</h3>
                        <p className="text-primary text-sm font-medium">{exp.company}</p>
                      </div>
                      <span className="text-xs text-muted font-mono whitespace-nowrap px-3 py-1 bg-background rounded-full border border-border">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-primary mt-1.5 flex-shrink-0">
                            <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
