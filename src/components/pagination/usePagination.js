import { useState, useCallback, useMemo } from 'react';

export const usePagination = (items = [], itemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }, [items, currentPage, itemsPerPage]);

  const handlePageChange = useCallback((newPage) => {
    const pageNum = Math.max(1, Math.min(newPage, totalPages));
    setCurrentPage(pageNum);
  }, [totalPages]);

  const goToFirstPage = useCallback(() => {
    setCurrentPage(1);
  }, []);

  const goToLastPage = useCallback(() => {
    setCurrentPage(totalPages);
  }, [totalPages]);

  return {
    currentPage,
    totalPages,
    paginatedItems,
    handlePageChange,
    goToFirstPage,
    goToLastPage,
  };
};
