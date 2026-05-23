import { useState, useCallback, useMemo } from 'react';

export const useTableFilter = (data = []) => {
  const [filters, setFilters] = useState({});

  const addFilter = useCallback((key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const removeFilter = useCallback((key) => {
    setFilters((prev) => {
      const newFilters = { ...prev };
      delete newFilters[key];
      return newFilters;
    });
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({});
  }, []);

  const filteredData = useMemo(() => {
    if (Object.keys(filters).length === 0) return data;

    return data.filter((item) =>
      Object.entries(filters).every(([key, value]) => {
        if (!value) return true;

        const itemValue = String(item[key]).toLowerCase();
        const filterValue = String(value).toLowerCase();

        return itemValue.includes(filterValue);
      })
    );
  }, [data, filters]);

  return {
    filters,
    filteredData,
    addFilter,
    removeFilter,
    clearFilters,
  };
};
