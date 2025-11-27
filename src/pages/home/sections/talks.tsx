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
  const [selectedTalk, setSelectedTalk] = useState<number | null>(null);

  const handleTalkClick = (index: number) => {
    setSelectedTalk((prevSelected) => (prevSelected === index ? null : index));
  };

  return (
    <div>
      {talks.map((talk, index) => (
        <div
          key={index}
          className={`flex flex-col gap-4 py-3 px-4 rounded-sm ${
            talk.image ? "cursor-pointer hover:bg-muted" : ""
          }`}
          onClick={() => handleTalkClick(index)}
        >
          {selectedTalk === index && talk.image && (
            <img
              src={talk.image}
              alt={talk.title}
              className="rounded-sm w-full h-64 object-cover"
              loading="lazy"
            />
          )}
          <div className="flex flex-col gap-0.5">
            <div className="text-base font-semibold">{talk.title}</div>
            <div className="flex flex-row justify-between text-sm text-muted-foreground">
              <p className="line-clamp-2">{talk.location}</p>
              <p className="flex flex-row gap-1 items-center shrink-0">
                <FaRegCalendar />
                {talk.date}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
