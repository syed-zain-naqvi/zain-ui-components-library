import React from 'react';
import { cn } from '../../utils/cn';

export function NotificationBadge({
  count = 0,
  max = 99,
  showZero = false,
  dot = false,
  color = 'error',
  size = 'md',
  position = 'top-right',
  children,
  className,
  badgeClassName,
  ...props
}) {
  const colorMap = {
    error: 'bg-red-500 text-white',
    primary: 'bg-indigo-600 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-white',
    info: 'bg-blue-500 text-white',
  };

  const positionMap = {
    'top-right': '-top-1 -right-1',
    'top-left': '-top-1 -left-1',
    'bottom-right': '-bottom-1 -right-1',
    'bottom-left': '-bottom-1 -left-1',
  };

  const sizeMap = {
    sm: dot ? 'w-2 h-2' : 'min-w-[1rem] h-4 text-[0.6rem] px-1',
    md: dot ? 'w-2.5 h-2.5' : 'min-w-[1.125rem] h-[1.125rem] text-xs px-1',
    lg: dot ? 'w-3 h-3' : 'min-w-[1.25rem] h-5 text-xs px-1.5',
  };

  const displayCount = count > max ? `${max}+` : count;
  const isVisible = dot || count > 0 || showZero;

  if (!children) {
    return isVisible ? (
      <span
        className={cn(
          'inline-flex items-center justify-center rounded-full font-bold leading-none',
          colorMap[color] ?? colorMap.error,
          sizeMap[size],
          className
        )}
        {...props}
      >
        {!dot && displayCount}
      </span>
    ) : null;
  }

  return (
    <span className={cn('relative inline-flex', className)} {...props}>
      {children}
      {isVisible && (
        <span
          className={cn(
            'absolute inline-flex items-center justify-center rounded-full font-bold leading-none',
            colorMap[color] ?? colorMap.error,
            sizeMap[size],
            positionMap[position] ?? positionMap['top-right'],
            badgeClassName
          )}
        >
          {!dot && displayCount}
        </span>
      )}
    </span>
  );
}

NotificationBadge.displayName = 'NotificationBadge';