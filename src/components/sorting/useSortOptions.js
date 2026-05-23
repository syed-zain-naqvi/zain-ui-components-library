import { useState, useCallback, useMemo } from 'react';

export const useSortOptions = (items = []) => {
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const sortedItems = useMemo(() => {
    if (!sortKey) return items;

    const sorted = [...items].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];

      if (typeof aVal === 'string') {
        return sortOrder === 'asc'
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      if (typeof aVal === 'number') {
        return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
      }

      return 0;
    });

    return sorted;
  }, [items, sortKey, sortOrder]);

  const handleSort = useCallback((key, order = null) => {
    setSortKey(key);
    setSortOrder(order || (sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc'));
  }, [sortKey, sortOrder]);

  const resetSort = useCallback(() => {
    setSortKey(null);
    setSortOrder('asc');
  }, []);

  return {
    sortKey,
    sortOrder,
    sortedItems,
    handleSort,
    resetSort,
  };
};
