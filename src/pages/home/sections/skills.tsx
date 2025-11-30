import { useState, useMemo } from "react";
import { FaScrewdriverWrench } from "react-icons/fa6";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { skills } from "@/data/skills";

const TITLE = "Skills";
const CATEGORIES = ["All", ...Object.keys(skills)];

export default function SkillsSection() {
  const [active, setActive] = useState("All");

  const allSkills = useMemo(() => {
    return Object.entries(skills).flatMap(([category, items]) =>
      items.map((item) => ({
        ...item,
        category,
      }))
    );
  }, []);

  const filtered = active === "All" ? allSkills : allSkills.filter((s) => s.category === active);

  return (
    <div className="space-y-6">
      <div className="flex flex-row justify-center items-center gap-2 text-2xl font-semibold">
        <FaScrewdriverWrench className="text-primary" />
        {TITLE}
      </div>

      <div className="flex flex-row gap-4">
        <div className="w-52 flex flex-col gap-1">
          <span className="text-sm font-medium text-muted-foreground mb-2">Categories</span>

          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "px-3 py-2 rounded-sm text-left cursor-pointer",
                active === cat ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              )}
            >
              {cat}
            </button>
          ))}

          <Separator className="my-4" />

          <p className="text-sm leading-relaxed text-muted-foreground">
            Filter skills by category to explore my technical and research background.
          </p>
        </div>

        <ScrollArea className="w-full max-h-92 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 flex-1">
            {filtered.map((skill) => (
              <Card key={`${skill.category}-${skill.name}`} className="py-4 rounded-md">
                <CardHeader className="pb-2">
                  <CardTitle className="flex flex-row items-center gap-2">
                    {skill.logo && (
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-6 h-6 object-contain rounded"
                        loading="lazy"
                      />
                    )}
                    {skill.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <Badge variant="secondary" className="text-xs">
                    {skill.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
