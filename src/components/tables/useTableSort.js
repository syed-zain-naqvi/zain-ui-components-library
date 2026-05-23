import { useState, useCallback, useMemo } from 'react';

export const useTableSort = (data = [], initialSortKey = null, initialDirection = 'asc') => {
  const [sortKey, setSortKey] = useState(initialSortKey);
  const [sortDirection, setSortDirection] = useState(initialDirection);

  const handleSort = useCallback((key) => {
    setSortKey((prevKey) => {
      if (prevKey === key) {
        setSortDirection((prevDir) => (prevDir === 'asc' ? 'desc' : 'asc'));
        return prevKey;
      }
      setSortDirection('asc');
      return key;
    });
  }, []);

  const sortedData = useMemo(() => {
    if (!sortKey) return data;

    const sorted = [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];

      if (typeof aVal === 'string') {
        return sortDirection === 'asc'
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      if (typeof aVal === 'number') {
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      }

      if (aVal instanceof Date && bVal instanceof Date) {
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      }

      return 0;
    });

    return sorted;
  }, [data, sortKey, sortDirection]);

  const resetSort = useCallback(() => {
    setSortKey(null);
    setSortDirection('asc');
  }, []);

  return {
    sortKey,
    sortDirection,
    sortedData,
    handleSort,
    resetSort,
  };
};
