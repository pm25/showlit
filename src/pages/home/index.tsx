import { usePageTitle } from "@/hooks/use-pagetitle";

import IntroductionSection from "./sections/introduction";
import ExperienceSection from "./sections/experience";
import PublicationsSection from "./sections/publications";
import ProjectsSection from "./sections/projects";
import TalksSection from "./sections/talks";

import { homepage } from "@/data/homepage";

const sectionComponents: Record<string, React.ReactNode> = {
  Introduction: <IntroductionSection />,
  Experience: <ExperienceSection />,
  Publications: <PublicationsSection />,
  Projects: <ProjectsSection />,
  Talks: <TalksSection />,
};

export default function HomePage() {
  usePageTitle("About Me");

  return (
    <div className="flex flex-1 flex-col items-center gap-16 my-4">
      {homepage.sections.map((sectionName) => (
        <div key={sectionName} className="w-full max-w-5xl px-2 md:px-8">
          {sectionComponents[sectionName]}
        </div>
      ))}
    </div>
  );
}
