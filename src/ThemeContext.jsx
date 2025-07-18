// ThemeContext.js
import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return true;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    const theme = isDarkMode ? darkTheme : lightTheme;

    // Apply theme class
    root.classList.remove(isDarkMode ? 'light' : 'dark');
    root.classList.add(isDarkMode ? 'dark' : 'light');

    // Set CSS variables
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Enhanced theme definitions
const darkTheme = {
  'background': '#0f172a',
  'background-secondary': '#1e293b',
  'card': '#1e293b',
  'text': '#f8fafc',
  'text-secondary': '#cbd5e1',
  'primary': '#60a5fa',
  'secondary': '#a855f7',
  'highlight': '#ec4899',
  'accent': '#f97316',
  'nav': 'rgba(15, 23, 42, 0.92)',
  'border': '#334155',
  'skill-tag': '#334155',
  'skill-tag-text': '#f1f5f9',
  'gradient': 'linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)',
  'shadow': '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
  'success': '#10b981',
  'warning': '#f59e0b',
  'error': '#ef4444'
};

const lightTheme = {
  'background': '#f8fafc',
  'background-secondary': '#f1f5f9',
  'card': '#ffffff',
  'text': '#0f172a',
  'text-secondary': '#475569',
  'primary': '#3b82f6',
  'secondary': '#7c3aed',
  'highlight': '#db2777',
  'accent': '#ea580c',
  'nav': 'rgba(248, 250, 252, 0.92)',
  'border': '#e2e8f0',
  'skill-tag': '#e2e8f0',
  'skill-tag-text': '#334155',
  'gradient': 'linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)',
  'shadow': '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
  'success': '#10b981',
  'warning': '#f59e0b',
  'error': '#ef4444'
};