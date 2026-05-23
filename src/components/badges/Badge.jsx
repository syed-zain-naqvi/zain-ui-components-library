import React from 'react';
import { cn } from '../../utils/cn';

const badgeVariants = {
  solid: {
    primary: 'bg-indigo-600 text-white dark:bg-indigo-500',
    secondary: 'bg-zinc-600 text-white dark:bg-zinc-500',
    success: 'bg-green-600 text-white dark:bg-green-500',
    warning: 'bg-yellow-500 text-white dark:bg-yellow-400',
    error: 'bg-red-600 text-white dark:bg-red-500',
    info: 'bg-blue-600 text-white dark:bg-blue-500',
    neutral: 'bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200',
  },
  subtle: {
    primary: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
    secondary: 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300',
    success: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
    warning: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
    error: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
    info: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
    neutral: 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400',
  },
  outline: {
    primary: 'border border-indigo-500 text-indigo-600 dark:text-indigo-400',
    secondary: 'border border-zinc-400 text-zinc-600 dark:text-zinc-300',
    success: 'border border-green-500 text-green-600 dark:text-green-400',
    warning: 'border border-yellow-500 text-yellow-600 dark:text-yellow-400',
    error: 'border border-red-500 text-red-600 dark:text-red-400',
    info: 'border border-blue-500 text-blue-600 dark:text-blue-400',
    neutral: 'border border-zinc-300 text-zinc-500 dark:border-zinc-600 dark:text-zinc-400',
  },
};

const badgeSizes = {
  xs: 'text-[0.65rem] px-1.5 py-0.5',
  sm: 'text-xs px-2 py-0.5',
  md: 'text-xs px-2.5 py-1',
  lg: 'text-sm px-3 py-1',
};

const badgeRounded = {
  sm: 'rounded',
  md: 'rounded-md',
  full: 'rounded-full',
};

export function Badge({
  variant = 'subtle',
  color = 'primary',
  size = 'md',
  rounded = 'full',
  dot = false,
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}) {
  const variantColor = badgeVariants[variant]?.[color] ?? badgeVariants.subtle.primary;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 font-medium leading-none',
        variantColor,
        badgeSizes[size],
        badgeRounded[rounded] ?? 'rounded-full',
        className
      )}
      {...props}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-75 flex-shrink-0" />
      )}
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </span>
  );
}

Badge.displayName = 'Badge';