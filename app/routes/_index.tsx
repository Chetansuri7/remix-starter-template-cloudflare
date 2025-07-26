import { useEffect } from "react";
import type { MetaFunction } from "@remix-run/cloudflare";
import { useLocation } from "@remix-run/react";
import { AppBar } from "~/components/layout/AppBar";
import { Footer } from "~/components/layout/Footer";
import { Hero } from "~/components/landing/Hero";
import { Features } from "~/components/landing/Features";
import { Stats } from "~/components/landing/Stats";
import { Pricing } from "~/components/landing/Pricing";
import { CTA } from "~/components/landing/CTA";
import { FAQ } from "~/components/landing/FAQ";
import { Models } from "~/components/landing/Models";
import { ModernBackground } from "~/components/ui/modern-background";
import { FloatingElements } from "~/components/ui/floating-elements";
import { useAppBarContext } from "~/contexts/AppBarContext";

export const meta: MetaFunction = () => {
  const title = "KriviLak AI – Unified AI Chat App";
  const description = "Unifying ChatGPT, Gemini, Meta, and more into one chat interface. Simplify your AI workflow with KriviLak AI.";
  const url = "https://krivilak.com/";
  const image = "/logo-dark.png";
  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow" },
    { rel: "canonical", href: url },
    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:site", content: "@krivilak" },
    // Favicon (if not already in root)
    { rel: "icon", href: "/favicon.ico" },
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
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "KriviLak AI",
            "url": "https://krivilak.com/",
            "logo": "/logo-dark.png",
            "sameAs": [
              "https://twitter.com/krivilak"
            ]
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://krivilak.com/",
            "name": "KriviLak AI",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://krivilak.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />
      <ModernBackground />
      <FloatingElements />
      <AppBar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <Stats />
        <Models />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
