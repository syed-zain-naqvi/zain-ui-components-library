import React, { createContext, useState, useEffect } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('sidebar-open');
    if (stored) {
      setIsOpen(JSON.parse(stored));
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      localStorage.setItem('sidebar-open', JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
