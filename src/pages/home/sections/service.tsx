import { FaUserCheck, FaRegCalendar } from "react-icons/fa6";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { service } from "@/data/service";

export default function ServiceSection() {
  return (
    <div className="w-full my-8">
      <Card className="rounded-md md:px-2">
        <CardHeader>
          <CardTitle className="flex flex-row justify-center items-center gap-2 text-plus font-semibold">
            <FaUserCheck />
            Professional Service
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {service.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 border-b border-muted-foreground/20 pb-3 last:border-none"
            >
              {item.category && (
                <div className="text-xs uppercase tracking-wide text-muted-foreground">
                  {item.category}
                </div>
              )}

              <div className="flex flex-row justify-between text-sm">
                <div className="font-semibold">
                  {item.role}
                  {item.organization && (
                    <span className="text-muted-foreground"> @ {item.organization}</span>
                  )}
                </div>

                {item.date && !item.description && (
                  <p className="flex flex-row items-center gap-1 text-muted-foreground shrink-0">
                    <FaRegCalendar />
                    {item.date}
                  </p>
                )}
              </div>

              {item.description && (
                <div className="flex flex-row justify-between text-sm">
                  <div className="text-muted-foreground">{item.description}</div>

                  {item.date && (
                    <p className="flex flex-row items-center gap-1 text-muted-foreground shrink-0">
                      <FaRegCalendar />
                      {item.date}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
