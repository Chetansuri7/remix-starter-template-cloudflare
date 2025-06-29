import React from "react";
import { Section } from "../shared/Section";
import { Button } from "../ui/button";

export function CTA() {
  return (
    <Section id="cta" className="text-center">
      <div className="mx-auto max-w-2xl flex flex-col items-center gap-7">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to simplify your AI workflow?
        </h2>
        <p className="text-muted-foreground text-lg mb-6">
          Sign up now for seamless access to all your favorite AI chat providers in one place.
        </p>
        <Button size="lg">Join Waitlist</Button>
      </div>
    </Section>
  );
}