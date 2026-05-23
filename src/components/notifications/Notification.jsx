import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Notification = ({
  id,
  message,
  type = 'info',
  duration = 5000,
  onClose = null,
  dismissible = true,
  ...props
}) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        if (onClose) {
          onClose(id);
        }
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [id, duration, onClose]);

  const typeClasses = {
    success:
      'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200',
    error:
      'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200',
    warning:
      'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200',
    info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200',
  };

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  };

  return (
    <div
      className={`p-4 rounded-lg border flex items-center gap-3 animate-slideIn ${typeClasses[type]}`}
      role="alert"
      {...props}
    >
      <span className="text-lg font-bold">{icons[type]}</span>
      <span className="flex-1">{message}</span>
      {dismissible && (
        <button
          onClick={() => onClose && onClose(id)}
          className="text-lg hover:opacity-70 transition-opacity"
          aria-label="Close notification"
        >
          ✕
        </button>
      )}
    </div>
  );
};

Notification.propTypes = {
  id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  duration: PropTypes.number,
  onClose: PropTypes.func,
  dismissible: PropTypes.bool,
};
