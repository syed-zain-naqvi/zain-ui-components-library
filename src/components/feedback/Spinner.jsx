import React from 'react';
import { cn } from '../../utils/cn';

const spinnerSizes = {
  xs: 'w-3 h-3 border-[1.5px]',
  sm: 'w-4 h-4 border-2',
  md: 'w-6 h-6 border-2',
  lg: 'w-8 h-8 border-[3px]',
  xl: 'w-12 h-12 border-4',
};

const spinnerColors = {
  primary: 'border-indigo-200 border-t-indigo-600 dark:border-indigo-800 dark:border-t-indigo-400',
  white: 'border-white/30 border-t-white',
  gray: 'border-zinc-200 border-t-zinc-600 dark:border-zinc-700 dark:border-t-zinc-300',
  success: 'border-green-200 border-t-green-600 dark:border-green-800 dark:border-t-green-400',
  error: 'border-red-200 border-t-red-600 dark:border-red-800 dark:border-t-red-400',
};

export function Spinner({
  size = 'md',
  color = 'primary',
  label = 'Loading...',
  className,
  ...props
}) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn('inline-block', className)}
      {...props}
    >
      <span
        className={cn(
          'block rounded-full animate-spin',
          spinnerSizes[size],
          spinnerColors[color]
        )}
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}

Spinner.displayName = 'Spinner';