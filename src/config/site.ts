import type { Metadata } from "next";

export const siteConfig = {
  name: "Mohammad Hosseini",
  title: "Mohammad Hosseini | Frontend Engineer",
  description:
    "Frontend Engineer specializing in React, TypeScript, and modern web applications. Building business-oriented software products.",
  url: "https://mohammadhosseini.dev",
  ogImage: "/og.png",
  author: {
    name: "Mohammad Hosseini",
    email: "mohammad@example.com",
    github: "https://github.com/mohammad",
    linkedin: "https://linkedin.com/in/mohammad",
    twitter: "https://twitter.com/mohammad",
  },
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contact", label: "Contact" },
  ] as { href: string; label: string }[],
};

export function constructMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  return {
    title: title
      ? `${title} | ${siteConfig.author.name}`
      : siteConfig.title,
    description: description ?? siteConfig.description,
    openGraph: {
      title: title ?? siteConfig.title,
      description: description ?? siteConfig.description,
      url: path ? `${siteConfig.url}${path}` : siteConfig.url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? siteConfig.title,
      description: description ?? siteConfig.description,
    },
    alternates: {
      canonical: path ? `${siteConfig.url}${path}` : siteConfig.url,
    },
  };
}
