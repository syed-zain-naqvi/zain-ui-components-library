import React from 'react';
import { cn } from '../../utils/cn';

const progressColors = {
  primary: 'bg-indigo-600 dark:bg-indigo-500',
  success: 'bg-green-500 dark:bg-green-400',
  warning: 'bg-yellow-500 dark:bg-yellow-400',
  error: 'bg-red-500 dark:bg-red-400',
  info: 'bg-blue-500 dark:bg-blue-400',
  neutral: 'bg-zinc-500 dark:bg-zinc-400',
};

const progressSizes = {
  xs: 'h-1',
  sm: 'h-1.5',
  md: 'h-2',
  lg: 'h-3',
  xl: 'h-4',
};

export function Progress({
  value = 0,
  max = 100,
  color = 'primary',
  size = 'md',
  striped = false,
  animated = false,
  label,
  showValue = false,
  className,
  ...props
}) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={cn('w-full', className)} {...props}>
      {(label || showValue) && (
        <div className="flex items-center justify-between mb-1.5">
          {label && (
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {label}
            </span>
          )}
          {showValue && (
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label ?? 'Progress'}
        className={cn(
          'w-full rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-700',
          progressSizes[size]
        )}
      >
        <div
          className={cn(
            'h-full rounded-full transition-all duration-500 ease-out',
            progressColors[color],
            striped && 'bg-stripes',
            animated && 'animate-pulse'
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

Progress.displayName = 'Progress';
