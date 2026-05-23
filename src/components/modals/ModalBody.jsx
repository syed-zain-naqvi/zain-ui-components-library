import React from 'react';

export const ModalBody = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`
        px-6 py-4
        text-slate-700 dark:text-slate-300
        ${className}
      `}
    >
      {children}
    </div>
  );
};