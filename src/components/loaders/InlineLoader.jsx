import React from 'react';
import { cn } from '../../utils/cn';

const sizeMap = {
  xs: 'gap-0.5',
  sm: 'gap-1',
  md: 'gap-1.5',
  lg: 'gap-2',
};

const dotSizeMap = {
  xs: 'w-1 h-1',
  sm: 'w-1.5 h-1.5',
  md: 'w-2 h-2',
  lg: 'w-2.5 h-2.5',
};

const colorMap = {
  primary: 'bg-indigo-600 dark:bg-indigo-400',
  white: 'bg-white',
  gray: 'bg-zinc-500 dark:bg-zinc-400',
  success: 'bg-green-500',
  error: 'bg-red-500',
};

export function InlineLoader({
  size = 'md',
  color = 'primary',
  label = 'Loading',
  className,
  ...props
}) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn('inline-flex items-center', sizeMap[size], className)}
      {...props}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={cn(
            'rounded-full animate-bounce',
            dotSizeMap[size],
            colorMap[color] ?? colorMap.primary
          )}
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
      <span className="sr-only">{label}</span>
    </span>
  );
}

InlineLoader.displayName = 'InlineLoader';