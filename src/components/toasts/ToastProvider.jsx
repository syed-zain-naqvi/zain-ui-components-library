import React from 'react';
import { ToastContext } from '../../context/ToastContext';
import { ToastContainer } from './ToastContainer';
import { generateId } from '../../utils/generateId';
import { useToast } from '../../hooks/useToast';

export function ToastProvider({ children, position = 'top-right', maxToasts = 5 }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback((options) => {
    const id = generateId('toast');
    const newToast = {
      id,
      variant: 'info',
      duration: 4000,
      ...options,
    };
    setToasts((prev) => {
      const updated = [newToast, ...prev];
      return updated.slice(0, maxToasts);
    });
    return id;
  }, [maxToasts]);

  const removeToast = React.useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const clearToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  const toast = React.useMemo(() => ({
    info: (opts) => addToast({ ...opts, variant: 'info' }),
    success: (opts) => addToast({ ...opts, variant: 'success' }),
    warning: (opts) => addToast({ ...opts, variant: 'warning' }),
    error: (opts) => addToast({ ...opts, variant: 'error' }),
    neutral: (opts) => addToast({ ...opts, variant: 'neutral' }),
    dismiss: removeToast,
    clear: clearToasts,
  }), [addToast, removeToast, clearToasts]);

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <ToastContainer
        toasts={toasts}
        position={position}
        onDismiss={removeToast}
      />
    </ToastContext.Provider>
  );
}

ToastProvider.displayName = 'ToastProvider';