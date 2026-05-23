import React from 'react';

export const ModalFooter = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`
        flex items-center justify-end gap-3
        px-6 py-4
        border-t border-slate-200 dark:border-slate-700
        bg-slate-50 dark:bg-slate-900
        flex-shrink-0
        ${className}
      `}
    >
      {children}
    </div>
  );
};