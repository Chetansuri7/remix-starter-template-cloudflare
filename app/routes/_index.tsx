import { useEffect } from "react";
import type { MetaFunction } from "@remix-run/cloudflare";
import { useLocation } from "@remix-run/react";
import { AppBar } from "~/components/layout/AppBar";
import { Footer } from "~/components/layout/Footer";
import { Hero } from "~/components/landing/Hero";
import { Features } from "~/components/landing/Features";
import { Pricing } from "~/components/landing/Pricing";
import { CTA } from "~/components/landing/CTA";
import { FAQ } from "~/components/landing/FAQ";
import { Models } from "~/components/landing/Models";
import { useAppBarContext } from "~/contexts/AppBarContext";

export const meta: MetaFunction = () => {
  return [
    { title: "KriviLak AI – Unified AI Chat App" },
    { name: "description", content: "Unifying ChatGPT, Gemini, Meta, and more into one chat interface. Simplify your AI workflow with KriviLak AI." },
  ];
};

export default function Index() {
  const { setNavMode } = useAppBarContext();
  const location = useLocation();

  useEffect(() => {
    setNavMode('landing');
  }, [setNavMode]);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <>
      <AppBar />
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
