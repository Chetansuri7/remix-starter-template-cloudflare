// Theme script to prevent flash of wrong theme
export function ThemeScript() {
  const themeScript = `
    (function() {
      function getThemeFromCookie() {
        const cookies = document.cookie.split(';').reduce((acc, cookie) => {
          const [key, value] = cookie.trim().split('=');
          acc[key] = value;
          return acc;
        }, {});
        return cookies.theme === 'dark' ? 'dark' : 'light';
      }
      
      const theme = getThemeFromCookie();
      const root = document.documentElement;
      
      // Remove any existing theme classes and add the correct one
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: themeScript,
      }}
    />
  );
}