import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

const Grid = forwardRef(
  (
    {
      children,
      columns = 1,
      spacing = 'md',
      autoFlow = 'row',
      justifyItems = 'start',
      alignItems = 'start',
      className,
      ...props
    },
    ref
  ) => {
    const columnMap = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      12: 'grid-cols-12',
    };

    const spacingMap = {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
      '2xl': 'gap-12',
    };

    const autoFlowMap = {
      row: 'auto-flow-row',
      column: 'auto-flow-col',
      dense: 'auto-flow-dense',
    };

    const justifyItemsMap = {
      start: 'justify-items-start',
      center: 'justify-items-center',
      end: 'justify-items-end',
      stretch: 'justify-items-stretch',
    };

    const alignItemsMap = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    };

    const baseStyles = 'grid';
    const columnStyles = columnMap[columns] || columnMap[1];
    const spacingStyles = spacingMap[spacing] || spacingMap.md;
    const autoFlowStyles = autoFlowMap[autoFlow] || autoFlowMap.row;
    const justifyStyles = justifyItemsMap[justifyItems] || justifyItemsMap.start;
    const alignStyles = alignItemsMap[alignItems] || alignItemsMap.start;

    return (
      <div
        ref={ref}
        className={cn(baseStyles, columnStyles, spacingStyles, autoFlowStyles, justifyStyles, alignStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';

export { Grid };