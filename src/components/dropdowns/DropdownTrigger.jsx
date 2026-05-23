import React from 'react';

const DropdownTrigger = React.forwardRef(
  ({ children, onClick, className = '', ...props }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`
          inline-flex items-center gap-2
          px-3 py-2 rounded-md
          bg-white dark:bg-slate-800
          border border-slate-200 dark:border-slate-700
          text-slate-900 dark:text-white
          hover:bg-slate-50 dark:hover:bg-slate-700
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900
          ${className}
        `}
        type="button"
        {...props}
      >
        {children}
      </button>
    );
  }
);

DropdownTrigger.displayName = 'DropdownTrigger';

export { DropdownTrigger };