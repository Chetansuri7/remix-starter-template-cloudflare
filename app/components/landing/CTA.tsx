import React from "react";
import { Section } from "../shared/Section";
import { Button } from "../ui/button";

export function CTA() {
  return (
    <Section
      id="cta"
      className="text-center flex flex-col items-center justify-center"
      style={{ maxWidth: "90rem" }}
    >
      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl rounded-2xl bg-card border border-border shadow-md py-14 px-4 md:px-12 flex flex-col items-center gap-7">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            Start Using All Top AI Models, Now.
          </h2>
          <p className="text-lg text-muted-foreground mb-4 max-w-xl">
            Sign up once. No more switching accounts or losing context. Get started in less than 60 seconds with total privacy.
          </p>
          <Button size="lg" className="px-10 py-5 text-lg">
            Get Started Free
          </Button>
        </div>
      </div>
    </Section>
  );
}