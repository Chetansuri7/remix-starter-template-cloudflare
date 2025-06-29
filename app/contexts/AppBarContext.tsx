import React, { createContext, useState, useContext, ReactNode } from 'react';

export type NavMode = 'landing' | 'page';

interface AppBarContextProps {
  navMode: NavMode;
  setNavMode: (mode: NavMode) => void;
}

const AppBarContext = createContext<AppBarContextProps | undefined>(undefined);

export const AppBarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [navMode, setNavMode] = useState<NavMode>('landing');

  return (
    <AppBarContext.Provider value={{ navMode, setNavMode }}>
      {children}
    </AppBarContext.Provider>
  );
};

export const useAppBarContext = () => {
  const context = useContext(AppBarContext);
  if (!context) {
    throw new Error('useAppBarContext must be used within an AppBarProvider');
  }
  return context;
};