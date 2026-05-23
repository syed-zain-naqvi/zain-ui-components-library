import React from 'react';

const PopoverTrigger = React.forwardRef(
  ({ children, onClick, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={className}
        {...props}
      >
        {children}
      </div>
    );
  }
);

PopoverTrigger.displayName = 'PopoverTrigger';

export { PopoverTrigger };