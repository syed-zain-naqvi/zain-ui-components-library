import React from 'react';
import { cn } from '../../utils/cn';

export function Skeleton({
  width,
  height,
  rounded = 'md',
  animate = true,
  className,
  style,
  ...props
}) {
  const roundedMap = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        'bg-zinc-200 dark:bg-zinc-700',
        animate && 'animate-pulse',
        roundedMap[rounded] ?? 'rounded-md',
        className
      )}
      style={{
        width: width ?? '100%',
        height: height ?? '1rem',
        ...style,
      }}
      {...props}
    />
  );
}

Skeleton.displayName = 'Skeleton';