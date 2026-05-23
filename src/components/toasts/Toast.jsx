import React from 'react';
import { cn } from '../../utils/cn';

const toastVariants = {
  info: 'bg-white border-l-4 border-l-blue-500 dark:bg-zinc-900 dark:border-l-blue-400',
  success: 'bg-white border-l-4 border-l-green-500 dark:bg-zinc-900 dark:border-l-green-400',
  warning: 'bg-white border-l-4 border-l-yellow-500 dark:bg-zinc-900 dark:border-l-yellow-400',
  error: 'bg-white border-l-4 border-l-red-500 dark:bg-zinc-900 dark:border-l-red-400',
  neutral: 'bg-white border-l-4 border-l-zinc-400 dark:bg-zinc-900 dark:border-l-zinc-500',
};

const toastIcons = {
  info: (
    <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  success: (
    <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  warning: (
    <svg className="w-5 h-5 text-yellow-500 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  error: (
    <svg className="w-5 h-5 text-red-500 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  neutral: (
    <svg className="w-5 h-5 text-zinc-500 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
};

export function Toast({
  id,
  variant = 'info',
  title,
  description,
  duration = 4000,
  onDismiss,
  isVisible = true,
  className,
  action,
  ...props
}) {
  const [exiting, setExiting] = React.useState(false);

  React.useEffect(() => {
    if (!duration || duration === Infinity) return;
    const timer = setTimeout(() => handleDismiss(), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const handleDismiss = () => {
    setExiting(true);
    setTimeout(() => onDismiss?.(id), 300);
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'relative flex items-start gap-3 w-full max-w-sm px-4 py-3 rounded-lg shadow-lg border border-zinc-100 dark:border-zinc-800 transition-all duration-300',
        toastVariants[variant],
        exiting ? 'opacity-0 translate-x-2 scale-95' : 'opacity-100 translate-x-0 scale-100',
        className
      )}
      {...props}
    >
      <div className="flex-shrink-0 mt-0.5">{toastIcons[variant]}</div>
      <div className="flex-1 min-w-0">
        {title && (
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
            {title}
          </p>
        )}
        {description && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-0.5 leading-relaxed">
            {description}
          </p>
        )}
        {action && (
          <div className="mt-2">{action}</div>
        )}
      </div>
      <button
        type="button"
        onClick={handleDismiss}
        className="flex-shrink-0 -mr-1 p-1 rounded-md text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400"
        aria-label="Dismiss notification"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

Toast.displayName = 'Toast';