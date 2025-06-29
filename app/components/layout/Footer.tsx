import React from "react";
import { Link } from "@remix-run/react";

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground mt-16 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4 gap-2">
        <div className="flex items-center gap-2">
          <img src="/logo-dark.png" alt="KriviLak AI Logo" className="h-6 dark:hidden" />
          <img src="/logo-light.png" alt="KriviLak AI Logo" className="h-6 hidden dark:block" />
          <span className="font-semibold text-lg tracking-tight">KriviLak AI</span>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm">
          <Link to="/faq" className="hover:underline">FAQ</Link>
          <Link to="/terms" className="hover:underline">Terms</Link>
          <Link to="/privacy" className="hover:underline">Privacy</Link>
        </nav>
        <div className="flex gap-3">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.484 2 12.018c0 4.426 2.868 8.182 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.37-1.34-3.37-1.34-.454-1.15-1.11-1.457-1.11-1.457-.909-.62.069-.608.069-.608 1.004.07 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.34-2.222-.252-4.555-1.115-4.555-4.963 0-1.096.39-1.993 1.029-2.694-.103-.253-.446-1.273.098-2.654 0 0 .84-.27 2.75 1.025A9.563 9.563 0 0 1 12 7.834c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.025 2.748-1.025.545 1.381.202 2.401.1 2.654.64.701 1.028 1.598 1.028 2.694 0 3.857-2.337 4.709-4.566 4.958.359.309.678.919.678 1.852 0 1.337-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.134 20.197 22 16.44 22 12.018 22 6.484 17.523 2 12 2Z"/></svg>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557a9.839 9.839 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.72 0-4.924 2.206-4.924 4.924 0 .386.043.763.127 1.124C7.728 8.89 4.1 7.13 1.671 4.149a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.215 2.188 4.099a4.904 4.904 0 0 1-2.23-.616c-.054 1.982 1.397 3.84 3.448 4.26A4.936 4.936 0 0 1 .964 15.07c.134 0 .266-.008.397-.023a6.945 6.945 0 0 0 3.76 1.104c4.513 0 6.982-3.738 6.982-6.982 0-.107-.002-.215-.008-.322A4.946 4.946 0 0 0 24 4.557z"/></svg>
          </a>
          <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.1a.201.201 0 0 0-.221.098c-.307.541-.639 1.248-.875 1.81a18.37 18.37 0 0 0-5.577 0c-.237-.56-.568-1.269-.876-1.81a.201.201 0 0 0-.221-.098 19.736 19.736 0 0 0-3.432 1.27A.19.19 0 0 0 5 4.479C2.69 7.947 2.023 11.29 2.047 14.601a.199.199 0 0 0 .08.155c1.427 1.05 2.818 1.697 4.17 2.13a.201.201 0 0 0 .219-.065c.322-.423.608-.868.857-1.325a.201.201 0 0 0-.109-.282c-.449-.152-.88-.326-1.3-.518a.201.201 0 0 1-.02-.349c.087-.063.174-.127.258-.191 2.521.825 5.3.825 7.819 0 .085.064.171.128.258.191a.201.201 0 0 1-.019.349c-.422.192-.852.366-1.301.518a.201.201 0 0 0-.11.282c.25.457.536.902.857 1.325a.201.201 0 0 0 .219.065c1.353-.433 2.744-1.08 4.17-2.13a.199.199 0 0 0 .08-.155c.024-3.311-.643-6.654-2.953-10.122a.19.19 0 0 0-.137-.11Z"/></svg>
          </a>
        </div>
      </div>
      <div className="container mx-auto py-2 px-4 text-xs text-center text-muted-foreground/70">
        &copy; {new Date().getFullYear()} KriviLak AI. All rights reserved.
      </div>
    </footer>
  );
}