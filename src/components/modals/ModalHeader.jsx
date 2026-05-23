import React from 'react';

export const ModalHeader = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`
        flex items-center justify-between
        px-6 py-4
        border-b border-slate-200 dark:border-slate-700
        bg-white dark:bg-slate-800
        flex-shrink-0
        ${className}
      `}
    >
      {children}
    </div>
  );
};