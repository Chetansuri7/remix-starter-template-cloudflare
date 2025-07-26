// Cookie-based theme utilities
export function getThemeFromCookie(cookieHeader?: string): 'light' | 'dark' {
  if (!cookieHeader) return 'light';
  
  const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);
  
  return cookies.theme === 'dark' ? 'dark' : 'light';
}

export function setThemeCookie(theme: 'light' | 'dark'): string {
  return `theme=${theme}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}

// Client-side cookie utilities
export function getClientTheme(): 'light' | 'dark' {
  if (typeof document === 'undefined') return 'light';
  
  const cookies = document.cookie.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);
  
  return cookies.theme === 'dark' ? 'dark' : 'light';
}

export function setClientTheme(theme: 'light' | 'dark') {
  if (typeof document === 'undefined') return;
  document.cookie = setThemeCookie(theme);
}