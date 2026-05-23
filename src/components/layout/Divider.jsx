import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

const Divider = forwardRef(
  (
    {
      orientation = 'horizontal',
      variant = 'solid',
      thickness = 'sm',
      color = 'neutral-200',
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'bg-current';

    const orientationMap = {
      horizontal: 'w-full h-px',
      vertical: 'h-full w-px',
    };

    const thicknessMap = {
      xs: 'h-0.5 dark:border-neutral-700',
      sm: 'h-px dark:border-neutral-600',
      md: 'h-1 dark:border-neutral-500',
      lg: 'h-1.5 dark:border-neutral-400',
    };

    const variantMap = {
      solid: 'opacity-100',
      dashed: 'border-t border-dashed',
      dotted: 'border-t border-dotted',
    };

    const orientationStyles = orientationMap[orientation] || orientationMap.horizontal;
    const thicknessStyles = thicknessMap[thickness] || thicknessMap.sm;
    const variantStyles = variantMap[variant] || variantMap.solid;

    return (
      <div
        ref={ref}
        className={cn(baseStyles, orientationStyles, thicknessStyles, variantStyles, `border-${color}`, className)}
        role="separator"
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';

export { Divider };