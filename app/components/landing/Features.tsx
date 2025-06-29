import React from "react";
import { Section } from "../shared/Section";
/* Inline SVG icons used below. */

const FEATURES = [
  {
    icon: <IconLayoutGrid />,
    title: "Multi-Provider Support",
    desc: "Seamlessly chat across ChatGPT, Gemini, Meta, and more in one unified platform.",
  },
  {
    icon: <IconZap />,
    title: "Task Automation",
    desc: "Automate workflows and keep productivity high—save time with effortless integrations.",
  },
  {
    icon: <IconShield />,
    title: "Privacy First",
    desc: "Your data stays yours. Modern security by design and robust privacy controls.",
  },
  {
    icon: <IconSparkles />,
    title: "Simplicity & Speed",
    desc: "Minimal UI, lightning-fast—no clutter, just results.",
  },
  {
    icon: <IconUsers />,
    title: "Unified Experience",
    desc: "Everything you need in one place, accessible on any device.",
  },
];

export function Features() {
  return (
    <Section
      id="features"
      className="flex flex-col items-center text-center"
      style={{ maxWidth: "90rem" }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
        All AI Models — Unified, Automated, Secure
      </h2>
      <p className="text-muted-foreground mb-12 text-lg max-w-2xl">
        Everything you need in one chat: switch providers instantly, automate repeat tasks, and never worry about privacy or vendor lock. Built for speed, simplicity, and modern work.
      </p>
      <div className="w-full flex justify-center mb-6">
        <div className="w-full max-w-6xl rounded-2xl bg-card border border-border shadow-md py-10 px-4 md:px-12">
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-background/70"
              >
                <span className="text-primary">{f.icon}</span>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// --- Minimal inline icons used for illustration ---
function IconLayoutGrid() {
  return (<svg viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8">
    <rect width="6" height="6" x="2" y="2" rx="2"/><rect width="6" height="6" x="12" y="2" rx="2"/><rect width="6" height="6" x="2" y="12" rx="2"/><rect width="6" height="6" x="12" y="12" rx="2"/>
  </svg>);
}
function IconZap() {
  return (<svg viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8"><path d="M7.14 2.29A1 1 0 0 1 8 2h4a1 1 0 0 1 .9 1.45l-2 4H15a1 1 0 0 1 .76 1.65l-8 9.5A1 1 0 0 1 5.07 17l2-8.5H5A1 1 0 0 1 4.06 6.65l2.99-4.36a1 1 0 0 1 .09-.12h.01z"/></svg>);
}
function IconShield() {
  return (<svg viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8"><path d="M10 2l6 3v5c0 4.418-2.686 8.167-6 9-3.314-.833-6-4.582-6-9V5l6-3z"/></svg>);
}
function IconSparkles() {
  return (<svg viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8"><path d="M10 2l1.45 4.5H16l-3.725 2.75 1.425 4.5L10 11.25 6.3 13.75l1.425-4.5L4 6.5h4.55z"/></svg>);
}
function IconUsers() {
  return (<svg viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8"><path d="M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM5 15a4 4 0 1 1 8 0H5Z" /></svg>);
}