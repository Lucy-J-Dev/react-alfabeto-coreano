import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
  storageKey?: string;
  defaultTheme?: string;
}

interface ThemeProviderState {
  theme: string;
  toggleTheme: () => void;
}

const initialThemeState: ThemeProviderState = {
  theme: "light",
  toggleTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialThemeState);
export const useTheme = () => useContext(ThemeProviderContext);

const ThemeProvider = ({ children, storageKey = "app-theme", defaultTheme = "light" }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(localStorage.getItem(storageKey) || defaultTheme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = {
    theme,
    toggleTheme,
  };

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
};

export default ThemeProvider;
