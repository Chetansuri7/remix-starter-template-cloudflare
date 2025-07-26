import { Section } from "../shared/Section";
import { Badge } from "../ui/badge";

const STATS = [
  {
    number: "10+",
    label: "AI Models",
    description: "Leading language models"
  },
  {
    number: "99.9%",
    label: "Uptime",
    description: "Reliable service"
  },
  {
    number: "50K+",
    label: "Users",
    description: "Trust our platform"
  },
  {
    number: "1M+",
    label: "Conversations",
    description: "Processed monthly"
  }
];

export function Stats() {
  return (
    <Section className="py-20" style={{ maxWidth: "90rem" }}>
      <div className="text-center mb-12">
        <Badge variant="outline" className="px-4 py-2 rounded-full bg-primary/5 border-primary/20 text-primary font-medium mb-6">
          Trusted by thousands
        </Badge>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Built for Scale and Performance
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Join thousands of users who trust KriviLak AI for their daily AI workflows
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
        {STATS.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl md:text-4xl font-extrabold text-primary mb-2">
              {stat.number}
            </div>
            <div className="font-semibold text-foreground mb-1 text-sm md:text-base">
              {stat.label}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}