import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

const Stack = forwardRef(
  (
    {
      children,
      direction = 'column',
      spacing = 'md',
      align = 'stretch',
      justify = 'flex-start',
      wrap = false,
      className,
      ...props
    },
    ref
  ) => {
    const directionMap = {
      column: 'flex-col',
      row: 'flex-row',
    };

    const spacingMap = {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
      '2xl': 'gap-12',
      '3xl': 'gap-16',
    };

    const alignMap = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    };

    const justifyMap = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    };

    const baseStyles = 'flex';
    const directionStyles = directionMap[direction] || directionMap.column;
    const spacingStyles = spacingMap[spacing] || spacingMap.md;
    const alignStyles = alignMap[align] || alignMap.stretch;
    const justifyStyles = justifyMap[justify] || justifyMap['start'];
    const wrapStyles = wrap ? 'flex-wrap' : 'flex-nowrap';

    return (
      <div
        ref={ref}
        className={cn(baseStyles, directionStyles, spacingStyles, alignStyles, justifyStyles, wrapStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';

export { Stack };