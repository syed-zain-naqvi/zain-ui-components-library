import React, { createContext, useState, useCallback } from 'react';
import { generateId } from '@/utils/generateId';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState([]);

  const openModal = useCallback((config) => {
    const id = generateId('modal');
    setModals((prev) => [...prev, { id, ...config }]);
    return id;
  }, []);

  const closeModal = useCallback((id) => {
    setModals((prev) => prev.filter((modal) => modal.id !== id));
  }, []);

  const closeAll = useCallback(() => {
    setModals([]);
  }, []);

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal, closeAll }}>
      {children}
    </ModalContext.Provider>
  );
};
