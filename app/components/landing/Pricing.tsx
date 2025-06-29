import React from "react";
import { Section } from "../shared/Section";
import { Button } from "../ui/button";

const PLANS = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect to try out KriviLak AI and basic AI chat.",
    benefits: [
      "Multi-provider chat",
      "Basic message history",
      "Community access",
    ],
    cta: "Join Free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$10/mo",
    description: "Advanced capabilities for heavy users.",
    benefits: [
      "Everything in Starter",
      "Unlimited provider switching",
      "Early access to new features",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    featured: true,
  },
  {
    name: "Pro Plus",
    price: "$30/mo",
    description: "For teams and power users needing more.",
    benefits: [
      "Everything in Pro",
      "Team collaboration",
      "Dedicated onboarding",
      "Highest limits & priority",
    ],
    cta: "Go Pro Plus",
    featured: false,
  },
];

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
      className="text-center flex flex-col items-center"
      style={{ maxWidth: "90rem" }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
        Pricing Plans
      </h2>
      <p className="text-muted-foreground mb-10 text-lg max-w-2xl">
        Choose the plan that's right for you. Upgrade or downgrade anytime.
      </p>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl rounded-2xl bg-card border border-border shadow-md py-10 px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {PLANS.map((plan, idx) => (
              <div
                key={plan.name}
                className={
                  "bg-background/70 border rounded-xl shadow-sm flex flex-col items-center px-7 py-8 text-left hover:shadow-lg transition-all duration-150 " +
                  (plan.featured ? "border-primary ring-2 ring-primary/20 scale-[1.04] shadow-primary/10" : "")
                }
              >
                <div className="mb-2 flex flex-col items-center gap-2">
                  <span className="text-base font-bold tracking-wide uppercase text-foreground">
                    {plan.name}
                  </span>
                  <span className="text-3xl font-extrabold mb-2">{plan.price}</span>
                  <span className="text-muted-foreground text-sm mb-2 text-center">
                    {plan.description}
                  </span>
                </div>
                <ul className="my-3 mb-6 text-sm space-y-2 w-full">
                  {plan.details.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500 font-semibold">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="w-full mt-auto">{plan.cta}</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}