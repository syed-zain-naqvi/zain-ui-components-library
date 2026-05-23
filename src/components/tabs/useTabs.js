import { useState, useCallback } from 'react';

export const useTabs = (defaultIndex = 0) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  const selectTab = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  const nextTab = useCallback((totalTabs) => {
    setSelectedIndex((prev) => (prev + 1) % totalTabs);
  }, []);

  const previousTab = useCallback((totalTabs) => {
    setSelectedIndex((prev) => (prev - 1 + totalTabs) % totalTabs);
  }, []);

  return {
    selectedIndex,
    selectTab,
    nextTab,
    previousTab,
  };
};
