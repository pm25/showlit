import { MdCoPresent } from "react-icons/md";
import { FaUserCheck, FaRegCalendar } from "react-icons/fa6";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { service } from "@/data/service";

interface ServiceSectionProps {
  variant?: string;
}

export default function ServiceSection({ variant = "default" }: ServiceSectionProps) {
  if (variant === "card") {
    return (
      <Card className="rounded-md md:px-2">
        <CardHeader>
          <CardTitle className="flex flex-row justify-center items-center gap-2 text-plus font-semibold">
            <FaUserCheck />
            Professional Service
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ServiceContent />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-row justify-center items-center gap-2 text-plus font-semibold">
        <MdCoPresent />
        Professional Service
      </div>
      <ServiceContent />
    </div>
  );
}

function ServiceContent() {
  // group services by category
  const groupedServices = service.reduce<Record<string, typeof service>>((acc, item) => {
    const cat = item.category || "Other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  return (
    <div className="space-y-4">
      {Object.entries(groupedServices).map(([category, items]) => (
        <div key={category}>
          <div className="text-sm text-muted-foreground font-medium mb-1">{category}</div>
          {items.map((item, index) => (
            <div key={index} className="flex flex-col py-1.5 px-4 rounded-sm hover:bg-muted">
              <div className="flex flex-col gap-0.5">
                <div className="font-semibold">{item.role}</div>
                <div className="flex flex-row justify-between text-sm text-muted-foreground">
                  {item.organization && <span>{item.organization}</span>}
                  {item.date && (
                    <p className="flex flex-row gap-1 items-center shrink-0">
                      <FaRegCalendar />
                      {item.date}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
