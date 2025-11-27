import { useState } from "react";
import { MdCoPresent } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa6";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { talks } from "@/data/talks";

interface TalksSectionProps {
  variant?: string;
}

export default function TalksSection({ variant = "default" }: TalksSectionProps) {
  if (variant === "card") {
    return (
      <Card className="rounded-md md:px-2">
        <CardHeader>
          <CardTitle className="flex flex-row justify-center items-center gap-2 text-plus font-semibold">
            <MdCoPresent />
            Presentations / Talks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TalksContent />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-row justify-center items-center gap-2 text-plus font-semibold">
        <MdCoPresent />
        Presentations / Talks
      </div>
      <TalksContent />
    </div>
  );
}

function TalksContent() {
  const [selectedTalk, setSelectedTalk] = useState<string | null>(null);

  const handleTalkClick = (id: string) => {
    setSelectedTalk((prev) => (prev === id ? null : id));
  };

  // group services by category
  const groupedTalks = talks.reduce<Record<string, typeof talks>>((acc, item) => {
    const cat = item.category || "Other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  return (
    <div className="space-y-4">
      {Object.entries(groupedTalks).map(([category, items]) => (
        <div key={category}>
          <div className="text-sm text-muted-foreground font-medium mb-1">{category}</div>
          {items.map((item, index) => {
            const key = `${category}-${index}`;
            return (
              <div
                key={key}
                className={`flex flex-col py-1.5 px-4 rounded-sm hover:bg-muted ${
                  item.image ? "cursor-pointer" : ""
                }`}
                onClick={() => handleTalkClick(key)}
              >
                {selectedTalk === key && item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-sm w-full h-64 object-cover"
                    loading="lazy"
                  />
                )}
                <div className="flex flex-col gap-0.5">
                  <div className="font-semibold">{item.title}</div>
                  <div className="flex flex-row justify-between text-sm text-muted-foreground">
                    {item.location && <span>{item.location}</span>}
                    {item.date && (
                      <p className="flex flex-row gap-1 items-center shrink-0">
                        <FaRegCalendar />
                        {item.date}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
