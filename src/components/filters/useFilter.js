import { useState, useCallback } from 'react';

export const useFilter = (initialFilters = {}) => {
  const [filters, setFilters] = useState(initialFilters);

  const setFilter = useCallback((key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const clearFilter = useCallback((key) => {
    setFilters((prev) => {
      const newFilters = { ...prev };
      delete newFilters[key];
      return newFilters;
    });
  }, []);

  const clearAllFilters = useCallback(() => {
    setFilters({});
  }, []);

  const applyFilters = useCallback((items, filterFn) => {
    return items.filter((item) => filterFn(item, filters));
  }, [filters]);

  return {
    filters,
    setFilter,
    clearFilter,
    clearAllFilters,
    applyFilters,
  };
};
