import React from 'react';

const DropdownMenu = React.forwardRef(
  ({ children, onItemClick, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          min-w-[200px] w-max
          bg-white dark:bg-slate-800
          border border-slate-200 dark:border-slate-700
          rounded-lg shadow-lg
          py-1 z-50
          ${className}
        `}
        role="menu"
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              onItemClick,
            });
          }
          return child;
        })}
      </div>
    );
  }
);

DropdownMenu.displayName = 'DropdownMenu';

export { DropdownMenu };