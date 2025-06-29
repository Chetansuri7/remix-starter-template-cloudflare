import React from "react";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

// Placeholder for a logo, remain unchanged
const LogoPlaceholder = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2 text-foreground"
  >
    <path d="M50 10 L90 90 H10 Z" fill="currentColor" />
  </svg>
);

// Custom TikTok icon matching Lucide stroke style
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    width="18"
    height="18"
  >
    <path d="M8 13a4 4 0 1 0 4 4V3h3.3A4.42 4.42 0 0 0 20 7.5" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 py-8 md:py-10 lg:py-12 bg-background mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          {/* Left: Logo + Description + Socials */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col items-start space-y-4">
            <Link to="/" className="flex items-center text-lg font-semibold text-primary">
              <LogoPlaceholder />
              KriviLak AI
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Sparking creative thought and exploring new possibilities with intelligent conversation.
            </p>
            <p className="text-xs text-muted-foreground">
              © {currentYear} KriviLak AI
            </p>
            <div className="flex space-x-2 pt-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com/" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://youtube.com/" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://tiktok.com/" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <TikTokIcon className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          {/* Right: Navigation Columns */}
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
            {/* Community / Main Navigation */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
                </li>
                <li>
                  <Link to="/research" className="text-muted-foreground hover:text-primary">Research</Link>
                </li>
                <li>
                  <Link to="/models" className="text-muted-foreground hover:text-primary">Models</Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link>
                </li>
                <li>
                  <Link to="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link>
                </li>
                <li>
                  <Link to="/chat" className="text-muted-foreground hover:text-primary">Chat</Link>
                </li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-muted-foreground opacity-60 cursor-not-allowed" title="Coming soon">Events</span>
                </li>
                <li>
                  <span className="text-muted-foreground opacity-60 cursor-not-allowed" title="Coming soon">Campus</span>
                </li>
                <li>
                  <span className="text-muted-foreground opacity-60 cursor-not-allowed" title="Coming soon">Fellows</span>
                </li>
                <li>
                  <Link to="/feedback" className="text-muted-foreground hover:text-primary">Feedback</Link>
                </li>
                <li>
                  <span className="text-muted-foreground opacity-60 cursor-not-allowed" title="Coming soon">Media inquiries</span>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary">Contact us</Link>
                </li>
              </ul>
            </div>
            {/* Resources */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom quote and copyright */}
        <div className="mt-8 pt-6 border-t border-border/40 text-center">
          <span className="text-sm text-muted-foreground italic block">
            “ Less structure, more intelligence. ”
          </span>
        </div>
      </div>
    </footer>
  );
}