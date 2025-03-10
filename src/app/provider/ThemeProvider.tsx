import React, { createContext, ReactNode, useContext, useState } from 'react';

interface IThemeContext {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('context error');
  }

  return context;
};

interface IThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  console.log();

  const isDarkInitial: boolean = localStorage.getItem('isDark') === 'dark' ? true : false;

  const [isDark, setIsDark] = useState<boolean>(isDarkInitial);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    localStorage.setItem('isDark', isDark ? 'white' : 'dark');
  };

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>;
};
