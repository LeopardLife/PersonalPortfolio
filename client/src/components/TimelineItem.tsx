import { Card, CardContent } from "@/components/ui/card";

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string[];
}

export default function TimelineItem({
  date,
  title,
  company,
  description,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 border-l border-border last:border-0">
      <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-primary"></div>
      <Card>
        <CardContent className="pt-6">
          <time className="text-sm text-muted-foreground">{date}</time>
          <h3 className="text-lg font-semibold mt-2">{title}</h3>
          <p className="text-muted-foreground">{company}</p>
          <ul className="mt-4 space-y-2">
            {description.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                • {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
