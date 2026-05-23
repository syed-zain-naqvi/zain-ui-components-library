import React from 'react';
import { cn } from '../../utils/cn';

const statusConfig = {
  online: {
    label: 'Online',
    color: 'bg-green-500',
    pulse: true,
    text: 'text-green-700 dark:text-green-400',
    bg: 'bg-green-100 dark:bg-green-900/40',
  },
  offline: {
    label: 'Offline',
    color: 'bg-zinc-400',
    pulse: false,
    text: 'text-zinc-600 dark:text-zinc-400',
    bg: 'bg-zinc-100 dark:bg-zinc-800',
  },
  busy: {
    label: 'Busy',
    color: 'bg-red-500',
    pulse: false,
    text: 'text-red-700 dark:text-red-400',
    bg: 'bg-red-100 dark:bg-red-900/40',
  },
  away: {
    label: 'Away',
    color: 'bg-yellow-500',
    pulse: false,
    text: 'text-yellow-700 dark:text-yellow-400',
    bg: 'bg-yellow-100 dark:bg-yellow-900/40',
  },
  idle: {
    label: 'Idle',
    color: 'bg-orange-400',
    pulse: false,
    text: 'text-orange-700 dark:text-orange-400',
    bg: 'bg-orange-100 dark:bg-orange-900/40',
  },
};

export function StatusBadge({
  status = 'online',
  label,
  showLabel = true,
  size = 'md',
  className,
  ...props
}) {
  const config = statusConfig[status] ?? statusConfig.offline;
  const displayLabel = label ?? config.label;

  const dotSize = size === 'sm' ? 'w-1.5 h-1.5' : size === 'lg' ? 'w-3 h-3' : 'w-2 h-2';
  const textSize = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-sm' : 'text-xs';
  const padding = size === 'sm' ? 'px-1.5 py-0.5' : size === 'lg' ? 'px-3 py-1' : 'px-2 py-0.5';

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium',
        config.bg,
        config.text,
        textSize,
        padding,
        className
      )}
      {...props}
    >
      <span className={cn('relative flex-shrink-0', dotSize)}>
        {config.pulse && (
          <span className={cn('absolute inset-0 rounded-full animate-ping opacity-75', config.color)} />
        )}
        <span className={cn('relative block rounded-full', dotSize, config.color)} />
      </span>
      {showLabel && displayLabel}
    </span>
  );
}

StatusBadge.displayName = 'StatusBadge';