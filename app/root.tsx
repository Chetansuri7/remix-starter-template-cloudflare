import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json, useLoaderData } from "@remix-run/react";
import { AppBarProvider } from "./contexts/AppBarContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ThemeScript } from "./components/ThemeScript";
import { getThemeFromCookie } from "./lib/theme-utils";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const theme = getThemeFromCookie(cookieHeader ?? undefined);
  
  return json({ theme });
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ThemeScript />
      </head>
      <body>
        <a
          href="#main-content"
          className="skip-to-content"
          style={{
            position: 'absolute',
            left: '-999px',
            top: 'auto',
            width: '1px',
            height: '1px',
            overflow: 'hidden',
            zIndex: 1000,
            background: '#fff',
            color: '#222',
            padding: '8px 16px',
            borderRadius: '4px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
          onFocus={e => {
            e.currentTarget.style.left = '16px';
            e.currentTarget.style.top = '16px';
            e.currentTarget.style.width = 'auto';
            e.currentTarget.style.height = 'auto';
            e.currentTarget.style.overflow = 'visible';
          }}
          onBlur={e => {
            e.currentTarget.style.left = '-999px';
            e.currentTarget.style.top = 'auto';
            e.currentTarget.style.width = '1px';
            e.currentTarget.style.height = '1px';
            e.currentTarget.style.overflow = 'hidden';
          }}
        >
          Skip to main content
        </a>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { theme } = useLoaderData<typeof loader>();
  
  return (
    <ThemeProvider initialTheme={theme}>
      <AppBarProvider>
        <Outlet />
      </AppBarProvider>
    </ThemeProvider>
  );
}
