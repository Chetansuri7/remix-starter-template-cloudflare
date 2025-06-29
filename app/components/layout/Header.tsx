import React from "react";
import { Link } from "@remix-run/react";

export function Header() {
  return (
    <header className="sticky top-0 bg-background border-b border-border z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/">
          <img src="/logo-dark.png" alt="KriviLak AI Logo" className="h-8 dark:hidden" />
          <img src="/logo-light.png" alt="KriviLak AI Logo" className="h-8 hidden dark:block" />
        </Link>
        <nav className="flex gap-4">
          <a href="#features" className="text-sm font-medium hover:underline">Features</a>
          <a href="#pricing" className="text-sm font-medium hover:underline">Pricing</a>
          <a href="#cta" className="text-sm font-medium hover:underline">Get Started</a>
          <Link to="/faq" className="text-sm font-medium hover:underline">FAQ</Link>
          <Link to="/terms" className="text-sm font-medium hover:underline">Terms</Link>
        </nav>
      </div>
    </header>
  );
}