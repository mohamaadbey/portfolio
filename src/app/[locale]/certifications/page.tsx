import { setRequestLocale } from "next-intl/server";
import { constructMetadata } from "@/config/site";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

export const metadata = constructMetadata({
  title: "Certifications",
  path: "/certifications",
});

const certifications = [
  {
    title: "Meta Front-End Developer",
    issuer: "Meta (Coursera)",
    date: "2024",
    description: "Professional certificate covering modern front-end development with React, responsive design, and version control.",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Foundational certification for AWS cloud services, architecture, and best practices.",
  },
  {
    title: "Google UX Design",
    issuer: "Google (Coursera)",
    date: "2023",
    description: "Comprehensive UX design certification covering user research, wireframing, prototyping, and usability testing.",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    description: "In-depth certification covering data structures, algorithms, and problem-solving in JavaScript.",
  },
];

export default async function CertificationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-24 md:pt-28">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Certifications" subtitle="Continuous learning and professional development" />

          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <ScrollReveal key={cert.title} delay={index * 0.1}>
                <div className="group relative bg-surface border border-border rounded-xl p-6 hover:border-primary/20 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="secondary">{cert.date}</Badge>
                  </div>
                  <h3 className="text-base font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary mb-3">{cert.issuer}</p>
                  <p className="text-sm text-muted leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
