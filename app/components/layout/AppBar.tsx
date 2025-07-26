import { useState } from "react";
import { Button } from "~/components/ui/button";
import { ModernButton } from "~/components/ui/modern-button";
import { ThemeToggle } from "~/components/ui/theme-toggle";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AI_CHAT_URL } from "~/lib/constants";
import { useAppBarContext } from "~/contexts/AppBarContext";
import { useNavigate, Link } from "@remix-run/react";

const NAV_LINKS = [
  { label: "Home", target: "hero" },
  { label: "Features", target: "features" },
  { label: "Models", target: "models" },
  { label: "Pricing", target: "pricing" },
  { label: "FAQ", target: "faq" },
];

const brandTextStyles =
  "font-extrabold text-2xl md:text-3xl text-primary select-none tracking-tight";
const navLinkStyles =
  "text-foreground hover:text-primary transition-colors";
const mobileNavLinkStyles =
  "text-lg font-medium py-2 text-left text-foreground hover:text-primary";
const iconStyles = "w-7 h-7 text-primary";

export function AppBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navMode } = useAppBarContext();
  const navigate = useNavigate();

  function handleNav(target: string) {
    if (navMode === 'landing') {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${target}`);
    }
    setMobileMenuOpen(false);
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-background/50 backdrop-blur-2xl backdrop-saturate-200 border-b border-border/20">
        <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 max-w-screen-xl w-full gap-4">
          {/* Brand & Hamburger */}
          <div className="flex items-center flex-shrink-0">
            <button
              type="button"
              className="md:hidden p-1 mr-2 text-foreground"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className={iconStyles} />
            </button>
            <Link to="/" className="hidden md:block" onClick={() => handleNav('hero')}>
              <span className={brandTextStyles}>KriviLak AI</span>
            </Link>
          </div>

          {/* Center brand on mobile */}
          <Link to="/" className="flex flex-1 justify-center items-center md:hidden" onClick={() => handleNav('hero')}>
            <span className={brandTextStyles}>KriviLak AI</span>
          </Link>

          {/* Navigation */}
          <nav
            className="hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-8 font-medium"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((linkItem) => (
              <button
                key={linkItem.target}
                onClick={() => handleNav(linkItem.target)}
                className={navLinkStyles}
              >
                {linkItem.label}
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Login Button */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <ThemeToggle />
            <ModernButton asChild variant="default" size="lg" className="min-w-[108px]" glow>
              <a href={AI_CHAT_URL} target="_blank" rel="noopener noreferrer">
                Log in
              </a>
            </ModernButton>
          </div>
        </div>
      </header>

      <div className="h-16" /> {/* Spacer for fixed header */}

      {/* Overlay for Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-overlay transition-opacity duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
        role="dialog"
        aria-modal="true"
      />

      {/* Mobile Slide-over Menu */}
      <nav
        id="mobile-menu"
        className={`fixed top-0 left-0 h-full w-64 bg-background/80 backdrop-blur-xl backdrop-saturate-150 z-[70] p-6 shadow-2xl flex flex-col gap-4 transform transition-transform duration-300 ease-in-out border-r border-border/30 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing menu
        aria-label="Mobile Navigation"
      >
        <div className="flex items-center justify-between pb-4 border-b border-border mb-2">
          <Link to="/" onClick={() => handleNav('hero')}>
            <span className={brandTextStyles}>KriviLak AI</span>
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
            className="p-1 text-foreground"
          >
            <XMarkIcon className={iconStyles} />
          </button>
        </div>
        <div className="flex flex-col gap-2 flex-grow">
          {NAV_LINKS.map((linkItem) => (
            <button
              key={linkItem.target}
              onClick={() => handleNav(linkItem.target)}
              className={mobileNavLinkStyles}
            >
              {linkItem.label}
            </button>
          ))}
        </div>
        <div className="mt-auto pt-4">
          <ModernButton asChild variant="default" className="w-full" size="lg" glow>
            <a href={AI_CHAT_URL} target="_blank" rel="noopener noreferrer">
              Log in
            </a>
          </ModernButton>
        </div>
      </nav>
    </>
  );
}
