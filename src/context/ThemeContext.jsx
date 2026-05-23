import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const [palette, setPalette] = useState('indigo');

  useEffect(() => {
    const stored = localStorage.getItem('theme-mode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (stored) {
      setMode(stored);
    } else {
      setMode(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (mode === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('theme-mode', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const changePalette = (newPalette) => {
    setPalette(newPalette);
    localStorage.setItem('theme-palette', newPalette);
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        palette,
        toggleMode,
        changePalette,
        isDark: mode === 'dark',
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
