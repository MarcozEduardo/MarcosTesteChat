import React, { createContext, useState, useEffect, useContext } from "react";
import { THEMES } from "../config/appConfig";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeId, setThemeId] = useState(() => {
    return localStorage.getItem("bob_theme") || "cyberpunk";
  });

  const theme = THEMES[themeId] || THEMES.cyberpunk;

  useEffect(() => {
    localStorage.setItem("bob_theme", themeId);
    const root = document.documentElement;
    root.style.setProperty("--bg", theme.bg);
    root.style.setProperty("--bg-gradient", theme.bgGradient);
    root.style.setProperty("--card", theme.card);
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--secondary", theme.secondary);
    root.style.setProperty("--success", theme.success);
    root.style.setProperty("--danger", theme.danger);
    root.style.setProperty("--text", theme.text);
    root.style.setProperty("--text-dim", theme.textDim);
    root.style.setProperty("--border", theme.border);
    root.style.setProperty("--input-bg", theme.inputBg);
  }, [themeId, theme]);

  return (
    <ThemeContext.Provider value={{ themeId, setThemeId, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
