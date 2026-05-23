import React from 'react';
import { cn } from '../../utils/cn';

export function OverlayLoader({
  visible = false,
  message = 'Loading...',
  blur = true,
  opacity = 'medium',
  className,
  children,
  ...props
}) {
  const opacityMap = {
    low: 'bg-white/40 dark:bg-zinc-950/40',
    medium: 'bg-white/70 dark:bg-zinc-950/70',
    high: 'bg-white/90 dark:bg-zinc-950/90',
    solid: 'bg-white dark:bg-zinc-950',
  };

  return (
    <div className={cn('relative', className)} {...props}>
      {children}
      {visible && (
        <div
          role="status"
          aria-label={message}
          className={cn(
            'absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-inherit',
            opacityMap[opacity] ?? opacityMap.medium,
            blur && 'backdrop-blur-sm'
          )}
        >
          <div className="relative w-10 h-10">
            <span className="absolute inset-0 rounded-full border-[3px] border-indigo-100 dark:border-indigo-900" />
            <span className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-indigo-600 dark:border-t-indigo-400 animate-spin" />
          </div>
          {message && (
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
              {message}
            </p>
          )}
          <span className="sr-only">{message}</span>
        </div>
      )}
    </div>
  );
}

OverlayLoader.displayName = 'OverlayLoader';