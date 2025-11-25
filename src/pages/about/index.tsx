import { usePageTitle } from "@/hooks/use-pagetitle";

import IntroductionSection from "./sections/introduction";
import ExperienceSection from "./sections/experience";
import PublicationsSection from "./sections/publications";
import ProjectsSection from "./sections/projects";
import TalksSection from "./sections/talks";

import { about } from "@/data/about";

const sectionComponents: Record<string, React.ReactNode> = {
  Introduction: <IntroductionSection />,
  Experience: <ExperienceSection />,
  Publications: <PublicationsSection />,
  Projects: <ProjectsSection />,
  Talks: <TalksSection />,
};

export default function About() {
  usePageTitle("About Me");

  return (
    <div className="flex flex-1 flex-col items-center gap-12">
      {about.sections.map((sectionName) => (
        <div key={sectionName} className="w-full max-w-5xl mt-4">
          {sectionComponents[sectionName]}
        </div>
      ))}
    </div>
  );
}
