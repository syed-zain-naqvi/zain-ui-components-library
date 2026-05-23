import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

const Spacer = forwardRef(
  ({ size = 'md', direction = 'vertical', className, ...props }, ref) => {
    const sizeMap = {
      xs: 'h-1 w-1',
      sm: 'h-2 w-2',
      md: 'h-4 w-4',
      lg: 'h-6 w-6',
      xl: 'h-8 w-8',
      '2xl': 'h-12 w-12',
      '3xl': 'h-16 w-16',
    };

    const flexStyles = direction === 'vertical' ? 'flex-1' : 'flex-1';

    return (
      <div
        ref={ref}
        className={cn(sizeMap[size] || sizeMap.md, flexStyles, className)}
        {...props}
      />
    );
  }
);

Spacer.displayName = 'Spacer';

export { Spacer };