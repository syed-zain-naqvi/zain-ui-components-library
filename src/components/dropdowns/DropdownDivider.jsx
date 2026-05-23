import React from 'react';

export const DropdownDivider = ({ className = '' }) => {
  return (
    <div
      className={`
        my-1 h-px
        bg-slate-200 dark:bg-slate-700
        ${className}
      `}
      role="separator"
    />
  );
};