import React from "react";
import { Button } from "../ui/button";
import { Section } from "../shared/Section";

export function Hero() {
  return (
    <Section id="hero" className="text-center flex flex-col items-center pt-24 pb-20">
      <div className="flex flex-col items-center gap-4">
        <img src="/logo-dark.png" alt="KriviLak AI Logo" className="w-20 mx-auto dark:hidden" />
        <img src="/logo-light.png" alt="KriviLak AI Logo" className="w-20 mx-auto hidden dark:block" />
        <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Simplifying AI Chat.<br className="hidden md:block" />One App, All Providers.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Unify your conversations. Tap into ChatGPT, Gemini, Meta, and more — all from a single, sleek, modern chat platform. Automate and simplify your AI-driven tasks.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#cta">
            <Button size="lg">Get Started</Button>
          </a>
          <a href="#pricing">
            <Button variant="outline" size="lg">See Plans</Button>
          </a>
        </div>
      </div>
    </Section>
  );
}