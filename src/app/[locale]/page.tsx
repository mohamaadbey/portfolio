import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Experience } from "@/components/sections/Experience";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { constructMetadata } from "@/config/site";

export const metadata = constructMetadata();

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <CertificationsSection />
      <ContactCTA />
    </>
  );
}
