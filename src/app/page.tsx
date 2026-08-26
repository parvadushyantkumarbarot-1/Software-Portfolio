import { Hero } from "@/components/home/hero";
import { MetricsStrip } from "@/components/home/metrics-strip";
import { WhatIWorkOn } from "@/components/home/what-i-work-on";
import { ExperienceSection } from "@/components/home/experience-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SystemsShowcase } from "@/components/systems/systems-showcase";
import { SkillsSection } from "@/components/home/skills-section";
import { PrinciplesSection } from "@/components/home/principles-section";
import { GithubBuildLog } from "@/components/home/github-build-log";
import { EducationSection } from "@/components/home/education-section";
import { ContactCta } from "@/components/home/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MetricsStrip />
      <WhatIWorkOn />
      <ExperienceSection />
      <FeaturedProjects />
      <SystemsShowcase linkToFullPage />
      <SkillsSection />
      <PrinciplesSection />
      <GithubBuildLog />
      <EducationSection />
      <ContactCta />
    </>
  );
}
