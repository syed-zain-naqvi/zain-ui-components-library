import { useState, useCallback } from 'react';

export const useDialog = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [dialogData, setDialogData] = useState(null);

  const openDialog = useCallback((data = null) => {
    setIsOpen(true);
    if (data) {
      setDialogData(data);
    }
  }, []);

  const closeDialog = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => setDialogData(null), 300);
  }, []);

  const toggleDialog = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    dialogData,
    openDialog,
    closeDialog,
    toggleDialog,
  };
};
