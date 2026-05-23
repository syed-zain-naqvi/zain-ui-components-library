import { useState, useCallback } from 'react';

let notificationId = 0;

export const useNotification = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback(
    (message, type = 'info', duration = 5000) => {
      const id = String(notificationId++);

      const notification = {
        id,
        message,
        type,
        duration,
      };

      setNotifications((prev) => [...prev, notification]);

      return id;
    },
    []
  );

  const removeNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  const success = useCallback(
    (message, duration) => addNotification(message, 'success', duration),
    [addNotification]
  );

  const error = useCallback(
    (message, duration) => addNotification(message, 'error', duration),
    [addNotification]
  );

  const warning = useCallback(
    (message, duration) => addNotification(message, 'warning', duration),
    [addNotification]
  );

  const info = useCallback(
    (message, duration) => addNotification(message, 'info', duration),
    [addNotification]
  );

  return {
    notifications,
    addNotification,
    removeNotification,
    clearAll,
    success,
    error,
    warning,
    info,
  };
};
