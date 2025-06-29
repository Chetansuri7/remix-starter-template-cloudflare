import React from "react";
import { Button } from "../ui/button";
import { Section } from "../shared/Section";

/* Provider icons - simple, less images */
function IconChatGPT() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 mx-2 text-primary" aria-label="ChatGPT">
      <circle cx="16" cy="16" r="15" fill="currentColor" opacity="0.14"/>
      <path d="M20.1,11c-0.37-0.91-1.19-1.51-2.15-1.51h-0.03c-0.16-0.8-0.87-1.41-1.72-1.41c-0.25,0-0.5,0.05-0.72,0.14
    c-0.51-0.58-1.33-0.77-2.04-0.46c-0.72,0.3-1.16,1.04-1.01,1.81c-0.64,0.31-1.06,0.99-0.91,1.73c0.16,0.73,0.8,1.23,1.54,1.19
    c0.35,0.5,1.05,0.62,1.53,0.28c0.13-0.08,0.25-0.19,0.35-0.32c0.49,0.25,1.1,0.11,1.42-0.31c0.18-0.23,0.27-0.52,0.26-0.82
    c0.53-0.01,1-0.35,1.13-0.84C19.01,11.34,19.61,11.16,20.1,11z" fill="currentColor" />
    </svg>
  );
}
function IconClaude() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 mx-2 text-purple-500" aria-label="Claude">
      <rect x="4" y="10" width="24" height="12" rx="6" fill="currentColor" opacity="0.18"/>
      <circle cx="16" cy="16" r="6" fill="currentColor"/>
    </svg>
  );
}
function IconGemini() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 mx-2 text-sky-500" aria-label="Gemini">
      <ellipse cx="16" cy="16" rx="14" ry="8" fill="currentColor" opacity="0.09"/>
      <ellipse cx="16" cy="16" rx="8" ry="14" fill="currentColor"/>
    </svg>
  );
}
function IconMeta() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 mx-2 text-indigo-500" aria-label="Meta">
      <ellipse cx="16" cy="16" rx="14" ry="8" fill="currentColor" opacity="0.14"/>
      <path d="M8 24 Q16 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
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

const PROVIDER_ICONS = [
  <IconChatGPT key="ChatGPT" />,
  <IconClaude key="Claude" />,
  <IconGemini key="Gemini" />,
  <IconMeta key="Meta" />,
];

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
    title: "Invite-Only & Team Ready",
    desc: "Collaborate securely. Manage access easily.",
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
          <div className="w-full max-w-3xl mx-auto mb-2">
            {/* Marquee: provider icons (static row for simplicity) */}
            <div className="flex items-center gap-3 justify-start md:justify-normal py-1">
              {PROVIDER_ICONS}
            </div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-1">
            Unify ChatGPT, Claude, Gemini, Meta—and automate everything. No extra accounts. No vendor lock. Fast, Modern, Secure. Built for teams and pros.
          </p>
          <div className="flex gap-3 mb-6 hidden md:flex">
            <TrustBadge icon={<IconLock />} label="100% Secure" />
            <TrustBadge icon={<IconUserCheck />} label="Invite-Only" />
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
            <TrustBadge icon={<IconUserCheck />} label="Invite-Only" />
            <TrustBadge icon={<IconShield />} label="Private Data" />
          </div>
        </div>
      </div>
    </Section>
  );
}