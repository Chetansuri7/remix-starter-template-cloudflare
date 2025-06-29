import React from "react";
import { Button } from "../ui/button";
import { Section } from "../shared/Section";

function IconZap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-pink-500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 2 13 12 21 12 8 22 11 12 3 12 13 2"/></svg>
  );
}
function IconShield() {
  return <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v5c0 5-3.5 9.1-8 10-4.5-.9-8-5-8-10V7l8-4z" /></svg>;
}
function IconUserCheck() {
  return <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M16 18v-1a4 4 0 0 0-8 0v1"/><path d="M17 10l2 2 4-4"/></svg>;
}
function IconLock() {
  return <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="6" y="10" width="12" height="10" rx="2"/><path d="M12 16v2m-6-8V8a6 6 0 1 1 12 0v2"/></svg>;
}

const CORE_FEATURES = [
  {
    icon: <IconZap />,
    title: "Automate Tasks",
    desc: "Set up flows—no code. Save hours every week.",
  },
  {
    icon: <IconShield />,
    title: "100% Secure",
    desc: "Your data is private by default. End-to-end encryption.",
  },
  {
    icon: <IconLock />,
    title: "No Vendor Lock-in",
    desc: "Switch providers anytime. Stay flexible.",
  },
  {
    icon: <IconUserCheck />,
    title: "Seamless Collaboration",
    desc: "Work together in real time. Empower your whole team.",
  },
];

function TrustBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/70 shadow text-sm font-semibold text-foreground border border-border">
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

export function Hero() {
  return (
    <Section
      id="hero"
      className="flex flex-col justify-center pt-16 pb-16 px-2 md:px-8"
      // wider than previous max-w
      style={{ maxWidth: "90rem" }}
    >
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-12 w-full">
        {/* Text side */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-5 px-2 md:px-0">
          <div className="flex gap-2 items-center">
            <span className="text-3xl font-extrabold tracking-tight text-primary">KriviLak AI</span>
          </div>
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-2">
            All Top AI Models & Automation<br />
            <span className="bg-gradient-to-r from-primary to-pink-500 text-transparent bg-clip-text">
              One App. Total Privacy.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-1">
            Unify ChatGPT, Claude, Gemini, Meta—and automate everything. No extra accounts. No vendor lock. Fast, Modern, Secure. Built for teams and pros.
          </p>
          <div className="flex gap-3 mb-6 hidden md:flex">
            <TrustBadge icon={<IconLock />} label="100% Secure" />
            <TrustBadge icon={<IconUserCheck />} label="Seamless Collaboration" />
            <TrustBadge icon={<IconShield />} label="Private Data" />
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
            <a href="#cta" className="flex-1">
              <Button size="lg" className="w-full">
                Get Started
              </Button>
            </a>
            <a href="#pricing" className="flex-1">
              <Button variant="outline" size="lg" className="w-full">
                See Plans
              </Button>
            </a>
          </div>
        </div>
        {/* Icon Bento side – replaces demo media */}
        <div className="flex-1 flex flex-col md:items-end justify-center items-center w-full">
          <div className="grid grid-cols-2 gap-6 md:gap-8 w-full max-w-md bg-background/80 rounded-2xl py-8 px-6 shadow-lg border border-border">
            {CORE_FEATURES.map(({ icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center gap-2">
                <div className="mb-1">{icon}</div>
                <div className="font-semibold">{title}</div>
                <div className="text-xs text-muted-foreground">{desc}</div>
              </div>
            ))}
          </div>
          {/* Trust badges on mobile */}
          <div className="flex gap-2 mt-6 md:hidden">
            <TrustBadge icon={<IconLock />} label="100% Secure" />
            <TrustBadge icon={<IconUserCheck />} label="Seamless Collaboration" />
            <TrustBadge icon={<IconShield />} label="Private Data" />
          </div>
        </div>
      </div>
    </Section>
  );
}