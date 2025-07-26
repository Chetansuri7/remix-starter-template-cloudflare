import { createContext, useContext, useEffect, useState } from "react";
import { getClientTheme, setClientTheme } from "~/lib/theme-utils";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ 
  children, 
  initialTheme = "light" 
}: { 
  children: React.ReactNode;
  initialTheme?: Theme;
}) {
  const [theme, setThemeState] = useState<Theme>(initialTheme);

  useEffect(() => {
    // Get theme from cookie on client-side
    const cookieTheme = getClientTheme();
    
    // Only update state if different from server-side initial theme
    if (cookieTheme !== initialTheme) {
      setThemeState(cookieTheme);
    }
    
    // Ensure theme is applied to document (ThemeScript should have done this already)
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(cookieTheme);
  }, [initialTheme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    setClientTheme(newTheme);
    
    // Apply theme to document immediately
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}