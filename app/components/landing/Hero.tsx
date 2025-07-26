import React from "react";
import { ModernButton } from "../ui/modern-button";
import { GlassCard } from "../ui/glass-card";
import { Badge } from "../ui/badge";
import { Section } from "../shared/Section";
import { AI_CHAT_URL } from "../../lib/constants";

function IconZap() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="w-8 h-8 text-primary"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="13 2 13 12 21 12 8 22 11 12 3 12 13 2" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l8 4v5c0 5-3.5 9.1-8 10-4.5-.9-8-5-8-10V7l8-4z"
      />
    </svg>
  );
}
function IconUserCheck() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M16 18v-1a4 4 0 0 0-8 0v1" />
      <path d="M17 10l2 2 4-4" />
    </svg>
  );
}
function IconLock() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <rect x="6" y="10" width="12" height="10" rx="2" />
      <path d="M12 16v2m-6-8V8a6 6 0 1 1 12 0v2" />
    </svg>
  );
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
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-md border border-border/30 text-sm font-medium text-foreground hover:bg-card/80 transition-all duration-300">
      <span className="w-4 h-4 flex items-center justify-center text-primary">{icon}</span>
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
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6 px-2 md:px-0">
          <Badge
            variant="outline"
            className="px-4 py-2 rounded-full bg-primary/5 border-primary/20 text-primary font-medium"
          >
            ✨ New: Multi-Model Chat Interface
          </Badge>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            All Top AI Models & Automation
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-transparent bg-clip-text animate-gradient-x">
              One App. Total Privacy.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Unify ChatGPT, Claude, Gemini, Meta—and automate everything. No
            extra accounts. No vendor lock. Fast, Modern, Secure. Built for
            teams and pros.
          </p>

          <div className="flex flex-wrap gap-3 mb-4 hidden md:flex">
            <TrustBadge icon={<IconLock />} label="100% Secure" />
            <TrustBadge icon={<IconUserCheck />} label="Seamless Collaboration" />
            <TrustBadge icon={<IconShield />} label="Private Data" />
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
            <a
              href={AI_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <ModernButton
                size="lg"
                className="w-full h-12 text-base font-semibold"
                glow
                gradient
              >
                Get Started Free
              </ModernButton>
            </a>
            <a href="#pricing" className="flex-1">
              <ModernButton
                variant="outline"
                size="lg"
                className="w-full h-12 text-base font-semibold bg-card/70 backdrop-blur-xl backdrop-saturate-150 border-border/20 hover:bg-card/80 transition-all duration-300"
              >
                See Plans
              </ModernButton>
            </a>
          </div>
        </div>
        {/* Icon Bento side – replaces demo media */}
        <div className="flex-1 flex flex-col md:items-end justify-center items-center w-full">
          <GlassCard className="w-full max-w-md p-8">
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {CORE_FEATURES.map(({ icon, title, desc }, index) => (
                <div
                  key={title}
                  className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-1 p-2 rounded-lg bg-muted/50 backdrop-blur-sm">
                    {icon}
                  </div>
                  <div className="font-semibold text-sm">{title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
          {/* Trust badges on mobile */}
          <div className="flex flex-wrap gap-3 mt-6 md:hidden justify-center">
            <TrustBadge icon={<IconLock />} label="100% Secure" />
            <TrustBadge icon={<IconUserCheck />} label="Collaboration" />
            <TrustBadge icon={<IconShield />} label="Private Data" />
          </div>
        </div>
      </div>
    </Section>
  );
}
