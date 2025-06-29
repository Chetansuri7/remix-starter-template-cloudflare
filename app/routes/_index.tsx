import type { MetaFunction } from "@remix-run/cloudflare";
import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";
import { Hero } from "~/components/landing/Hero";
import { Features } from "~/components/landing/Features";
import { Pricing } from "~/components/landing/Pricing";
import { CTA } from "~/components/landing/CTA";
import { FAQ } from "~/components/landing/FAQ";
import { Models } from "~/components/landing/Models";

export const meta: MetaFunction = () => {
  return [
    { title: "KriviLak AI – Unified AI Chat App" },
    { name: "description", content: "Unifying ChatGPT, Gemini, Meta, and more into one chat interface. Simplify your AI workflow with KriviLak AI." },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Models />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
