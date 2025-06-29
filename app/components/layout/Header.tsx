import React from "react";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

const NAV_LINKS = [
  { label: "Features", href: "#features", internal: false },
  { label: "Pricing", href: "#pricing", internal: false },
  { label: "Reviews", href: "#reviews", internal: false },
  { label: "FAQ", href: "/faq", internal: true },
  { label: "Blog", href: "/blog", internal: true },
  { label: "Docs", href: "/docs", internal: true },
  { label: "About", href: "/about", internal: true },
  { label: "Privacy", href: "/privacy", internal: true },
  { label: "Terms", href: "/terms", internal: true },
];

export function Header() {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <header className="sticky top-0 bg-background border-b border-border z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Brand as text */}
        <Link to="/" aria-label="KriviLak AI Home" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-primary">KriviLak AI</span>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 flex-1 justify-center" aria-label="Site navigation">
          {NAV_LINKS.map(({ label, href, internal }) =>
            internal ? (
              <Link key={label} to={href} className="text-sm font-medium hover:underline">
                {label}
              </Link>
            ) : (
              <a key={label} href={href} className="text-sm font-medium hover:underline">
                {label}
              </a>
            )
          )}
        </nav>
        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <a href="/login">Login</a>
          </Button>
          <Button asChild size="sm">
            <a href="#cta">Get Started</a>
          </Button>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden inline-flex items-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Open mobile menu"
          onClick={() => setMobileMenu(true)}
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" className="w-7 h-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="8" x2="24" y2="8" />
            <line x1="4" y1="16" x2="24" y2="16" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu Modal */}
      {mobileMenu && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-6 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close mobile menu"
            onClick={() => setMobileMenu(false)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
          <Link to="/" className="flex flex-col items-center mb-4" onClick={() => setMobileMenu(false)}>
            <span className="text-2xl font-extrabold tracking-tight text-primary">KriviLak AI</span>
          </Link>
          <nav className="flex flex-col items-center gap-6 text-lg" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ label, href, internal }) =>
              internal ? (
                <Link
                  key={label}
                  to={href}
                  className="font-semibold hover:underline"
                  onClick={() => setMobileMenu(false)}
                >{label}</Link>
              ) : (
                <a
                  key={label}
                  href={href}
                  className="font-semibold hover:underline"
                  onClick={() => setMobileMenu(false)}
                >{label}</a>
              )
            )}
          </nav>
          <div className="flex flex-col gap-4 mt-6 w-40">
            <Button asChild variant="ghost" size="lg">
              <a href="/login">Login</a>
            </Button>
            <Button asChild size="lg">
              <a href="#cta">Get Started</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}