import { Separator } from "@/components/ui/separator";
import { usePageTitle } from "@/hooks/use-pagetitle";

import IntroductionSection from "./sections/introduction";
import ExperienceSection from "./sections/experience";
import PublicationsSection from "./sections/publications";
import ProjectsSection from "./sections/projects";
import TalksSection from "./sections/talks";

export default function About() {
  usePageTitle("About Me");

  return (
    <div className="flex flex-1 flex-col items-center gap-12 py-4">
      <IntroductionSection />
      <ExperienceSection />
      <Separator orientation="horizontal" className="max-w-5xl mt-8" />
      <PublicationsSection />
      <Separator orientation="horizontal" className="max-w-5xl mt-8" />
      <ProjectsSection />
      <Separator orientation="horizontal" className="max-w-5xl mt-8" />
      <TalksSection />
    </div>
  );
}
