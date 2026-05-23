import React from 'react';

const PopoverContent = React.forwardRef(
  ({ children, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          bg-white dark:bg-slate-800
          border border-slate-200 dark:border-slate-700
          rounded-lg shadow-xl
          p-4 z-50 max-w-sm
          ${className}
        `}
        role="dialog"
        {...props}
      >
        {children}
      </div>
    );
  }
);

PopoverContent.displayName = 'PopoverContent';

export { PopoverContent };