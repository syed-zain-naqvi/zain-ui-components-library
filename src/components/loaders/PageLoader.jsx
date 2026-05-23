import React from 'react';
import { cn } from '../../utils/cn';

export function PageLoader({
  message = 'Loading...',
  showMessage = true,
  logo,
  className,
  ...props
}) {
  return (
    <div
      role="status"
      aria-label={message}
      className={cn(
        'fixed inset-0 z-[9998] flex flex-col items-center justify-center gap-4',
        'bg-white dark:bg-zinc-950',
        className
      )}
      {...props}
    >
      <div className="relative w-12 h-12">
        <span className="absolute inset-0 rounded-full border-4 border-indigo-100 dark:border-indigo-900" />
        <span className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-600 dark:border-t-indigo-400 animate-spin" />
        {logo && (
          <span className="absolute inset-0 flex items-center justify-center">
            {logo}
          </span>
        )}
      </div>
      {showMessage && (
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 animate-pulse">
          {message}
        </p>
      )}
      <span className="sr-only">{message}</span>
    </div>
  );
}

PageLoader.displayName = 'PageLoader';