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
  return (
    <Section id="pricing" className="text-center">
      <h2 className="text-3xl font-bold tracking-tight mb-4">Pricing</h2>
      <p className="text-muted-foreground mb-12 text-lg">
        Start for free—upgrade as you grow.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={
              "bg-background border rounded-xl shadow-lg flex-1 max-w-sm mx-auto p-8 flex flex-col items-center " +
              (plan.featured ? "border-primary ring-2 ring-primary/20" : "")
            }
          >
            <div className="mb-2 flex flex-col items-center gap-2">
              <span className="text-lg font-semibold">{plan.name}</span>
              <span className="text-3xl font-extrabold">{plan.price}</span>
              <span className="text-muted-foreground text-sm">{plan.description}</span>
            </div>
            <ul className="my-6 text-sm space-y-2 text-left w-full">
              {plan.benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="w-full mt-auto">{plan.cta}</Button>
          </div>
        ))}
      </div>
    </Section>
  );
}