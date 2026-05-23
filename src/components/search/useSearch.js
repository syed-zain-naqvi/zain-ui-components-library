import { useState, useCallback, useMemo } from 'react';

export const useSearch = (items = [], searchableFields = []) => {
  const [searchTerm, setSearchTerm] = useState('');

  const results = useMemo(() => {
    if (!searchTerm.trim() || items.length === 0) {
      return items;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();

    return items.filter((item) => {
      if (searchableFields.length === 0) {
        return JSON.stringify(item).toLowerCase().includes(lowerSearchTerm);
      }

      return searchableFields.some((field) => {
        const value = item[field];
        if (value === null || value === undefined) {
          return false;
        }
        return String(value).toLowerCase().includes(lowerSearchTerm);
      });
    });
  }, [items, searchTerm, searchableFields]);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  return {
    searchTerm,
    results,
    handleSearch,
    clearSearch,
    resultCount: results.length,
  };
};
