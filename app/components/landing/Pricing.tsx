import { Section } from "../shared/Section";
import { Button } from "../ui/button";
import { AI_CHAT_URL } from "../../lib/constants";

export function Pricing() {
  // Updated, detailed, compact pricing plans based on user content.
  const PLANS = [
    {
      name: "Free",
      price: "$0",
      cta: "Get Started",
      description: "Unlimited messaging. Basic chat and limited model access.",
      details: [
        "Unlimited messaging",
        "Basic chat completion",
        "Access to GPT-3.5",
        "Limited conversation history"
      ],
      featured: false,
    },
    {
      name: "Starter",
      price: "$10 / mo",
      cta: "Upgrade to Starter",
      description: "Best for regular users needing files & history.",
      details: [
        "Unlimited messaging",
        "Chat history (30 days)",
        "File uploads (PDF, DOCX)",
        "Faster response times",
        "Access to GPT-4",
        "Email support"
      ],
      featured: false,
    },
    {
      name: "Pro",
      price: "$30 / mo",
      cta: "Go Pro",
      description: "For power users: all features and priority access.",
      details: [
        "All Starter features",
        "Priority support",
        "Unlimited chat history",
        "Advanced prompt tools",
        "Image and code generation",
        "Priority access to new models"
      ],
      featured: true,
    },
  ];
  return (
    <Section
      id="pricing"
      className="text-center flex flex-col items-center py-20"
      style={{ maxWidth: "90rem" }}
    >
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Pricing Plans
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
          Choose the plan that's right for you. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan, idx) => (
            <div
              key={plan.name}
              className={
                "bg-card/70 backdrop-blur-xl backdrop-saturate-150 border border-border/20 rounded-2xl flex flex-col px-6 py-8 hover:bg-card/80 transition-all duration-300 " +
                (plan.featured ? "border-primary ring-2 ring-primary/20 scale-[1.04] relative" : "")
              }
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold tracking-wide uppercase text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-extrabold mb-3">{plan.price}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>
              
              <Button asChild size="lg" className="w-full mb-6" variant={plan.featured ? "default" : "outline"}>
                <a href={AI_CHAT_URL} target="_blank" rel="noopener noreferrer">
                  {plan.cta}
                </a>
              </Button>
              
              <ul className="space-y-3 text-sm">
                {plan.details.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary font-semibold mt-0.5 flex-shrink-0">✓</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}