import React from 'react';
import { cn } from '../../utils/cn';

const positionMap = {
  'bottom-right': 'bottom-0 right-0 translate-x-1/4 translate-y-1/4',
  'bottom-left': 'bottom-0 left-0 -translate-x-1/4 translate-y-1/4',
  'top-right': 'top-0 right-0 translate-x-1/4 -translate-y-1/4',
  'top-left': 'top-0 left-0 -translate-x-1/4 -translate-y-1/4',
};

const statusColors = {
  online: 'bg-green-400',
  offline: 'bg-zinc-400',
  busy: 'bg-red-400',
  away: 'bg-yellow-400',
};

const sizeMap = {
  xs: 'w-1.5 h-1.5',
  sm: 'w-2 h-2',
  md: 'w-2.5 h-2.5',
  lg: 'w-3 h-3',
  xl: 'w-3.5 h-3.5',
};

export function AvatarBadge({
  status,
  color,
  position = 'bottom-right',
  size = 'md',
  pulse = false,
  className,
  children,
  ...props
}) {
  const bgColor = status ? statusColors[status] : color ?? 'bg-zinc-400';

  return (
    <span
      className={cn(
        'absolute block rounded-full ring-2 ring-white dark:ring-zinc-900',
        typeof bgColor === 'string' && bgColor.startsWith('bg-') ? bgColor : '',
        sizeMap[size] ?? sizeMap.md,
        positionMap[position] ?? positionMap['bottom-right'],
        pulse && 'animate-pulse',
        className
      )}
      style={!bgColor.startsWith('bg-') ? { backgroundColor: bgColor } : undefined}
      aria-hidden="true"
      {...props}
    >
      {children}
    </span>
  );
}

AvatarBadge.displayName = 'AvatarBadge';