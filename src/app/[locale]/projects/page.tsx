import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { constructMetadata } from "@/config/site";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export const metadata = constructMetadata({
  title: "Projects",
  path: "/projects",
});

const projects = [
  {
    id: "anbarchi",
    title: "AI Inventory Manager",
    subtitle: "Anbarchi",
    description:
      "An AI-powered inventory management platform that analyzes consumption patterns and predicts future inventory needs for cafes and restaurants.",
    longDescription:
      "Cafe and restaurant managers struggle with inventory tracking and predicting when materials will run out. Anbarchi solves this by using machine learning to analyze consumption patterns and provide accurate predictions.",
    tags: ["React", "TypeScript", "PostgreSQL", "Drizzle ORM", "Express", "pnpm"],
    features: [
      "Consumption prediction using ML algorithms",
      "Automated inventory tracking and reordering",
      "Multi-tenant architecture for multiple businesses",
      "Real-time inventory alerts and notifications",
      "Detailed analytics and reporting dashboard",
    ],
    challenges: [
      "Implementing accurate consumption prediction models",
      "Designing multi-tenant data isolation",
      "Building real-time inventory alert system",
      "Optimizing database queries for large datasets",
    ],
    technicalDecisions: [
      {
        title: "Drizzle ORM",
        description: "Chosen for its type safety, performance, and excellent developer experience over traditional ORMs.",
      },
      {
        title: "Event-driven architecture",
        description: "Used for tracking inventory changes in real-time, enabling scalable and decoupled services.",
      },
      {
        title: "OpenAPI + Orval",
        description: "Automatic client generation from OpenAPI specs ensures type-safe API consumption across the monorepo.",
      },
      {
        title: "pnpm Workspaces",
        description: "Monorepo management with pnpm for efficient package sharing and dependency management.",
      },
    ],
    architecture: [
      "Monorepo using pnpm workspace",
      "Express backend with TypeScript",
      "PostgreSQL with Drizzle ORM",
      "OpenAPI specification with Orval codegen",
      "React frontend with TailwindCSS",
    ],
    githubUrl: "https://github.com/mohammad/anbarchi",
  },
  {
    id: "lms",
    title: "Learning Management System",
    subtitle: "LMS Platform",
    description:
      "A comprehensive LMS platform supporting admin, instructor, and student roles with real-time communication and JWT authentication.",
    longDescription:
      "Built from the ground up to provide a scalable educational platform with three distinct user roles. Features include course management, real-time chat, and comprehensive analytics.",
    tags: ["React", "Express", "PostgreSQL", "JWT", "Socket.io"],
    features: [
      "Multi-role system: Admin, Instructor, Student",
      "JWT-based authentication and authorization",
      "Real-time messaging with Socket.io",
      "Course creation and management tools",
      "Student progress tracking and analytics",
    ],
    challenges: [
      "Migrating from Prisma to raw PostgreSQL for better performance",
      "Rewriting the entire data access layer",
      "Optimizing database queries for complex joins",
      "Implementing real-time features at scale",
    ],
    technicalDecisions: [
      {
        title: "Raw PostgreSQL over Prisma",
        description: "Migrated from Prisma to raw SQL for more control over queries, better performance, and reduced overhead.",
      },
      {
        title: "JWT Authentication",
        description: "Stateless authentication for scalable API access across different user roles.",
      },
      {
        title: "Socket.io",
        description: "Real-time bidirectional communication for instant messaging and notifications.",
      },
    ],
    architecture: [
      "React frontend with TypeScript",
      "Express REST API backend",
      "PostgreSQL database",
      "JWT token-based auth",
      "Socket.io for real-time communication",
    ],
    githubUrl: "https://github.com/mohammad/lms",
  },
];

export default async function ProjectsPage({
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
          <SectionHeading title="Projects" subtitle="Things I've built" />

          <div className="space-y-24">
            {projects.map((project, index) => (
              <article key={project.id}>
                <ScrollReveal>
                  <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                    <div className="lg:col-span-3 order-2 lg:order-1">
                      <div className="space-y-6">
                        <div>
                          <p className="text-sm font-mono text-primary mb-2">
                            Featured Project
                          </p>
                          <h2 className="text-2xl md:text-3xl font-bold text-text">
                            {project.title}
                          </h2>
                          <p className="text-primary font-medium mt-1">
                            {project.subtitle}
                          </p>
                        </div>

                        <p className="text-muted leading-relaxed">
                          {project.longDescription}
                        </p>

                        <div>
                          <h3 className="text-lg font-semibold text-text mb-3">Key Features</h3>
                          <ul className="space-y-2">
                            {project.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted">
                                <span className="text-primary mt-1.5 flex-shrink-0">
                                  <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                                    <circle cx="3" cy="3" r="3" />
                                  </svg>
                                </span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-text mb-3">Challenges</h3>
                          <ul className="space-y-2">
                            {project.challenges.map((challenge, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted">
                                <span className="text-primary mt-1.5 flex-shrink-0">
                                  <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                                    <circle cx="3" cy="3" r="3" />
                                  </svg>
                                </span>
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-text mb-3">Technical Decisions</h3>
                          <div className="space-y-3">
                            {project.technicalDecisions.map((decision, i) => (
                              <div key={i} className="bg-surface border border-border rounded-lg p-4">
                                <h4 className="text-sm font-semibold text-primary mb-1">{decision.title}</h4>
                                <p className="text-sm text-muted">{decision.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-text mb-3">Architecture</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.architecture.map((item, i) => (
                              <Badge key={i} variant="secondary">{item}</Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                          {project.githubUrl && (
                            <Button variant="outline" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <GithubIcon className="h-4 w-4 mr-2" />
                                Source Code
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-2 order-1 lg:order-2">
                      <div className="sticky top-24">
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-surface">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-center p-8">
                            <div className="text-center">
                              <h3 className="text-xl font-bold text-text mb-2">{project.title}</h3>
                              <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                              <div className="mt-6 flex flex-wrap justify-center gap-2">
                                {project.tags.map((tag) => (
                                  <Badge key={tag} variant="default" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {index < projects.length - 1 && (
                  <div className="mt-24 border-t border-border/50" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
