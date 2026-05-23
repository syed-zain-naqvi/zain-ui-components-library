import React from 'react';
import { cn } from '../../utils/cn';

const colorMap = {
  primary: { track: '#e0e7ff', fill: '#4f46e5' },
  success: { track: '#dcfce7', fill: '#16a34a' },
  warning: { track: '#fef9c3', fill: '#ca8a04' },
  error: { track: '#fee2e2', fill: '#dc2626' },
  info: { track: '#dbeafe', fill: '#2563eb' },
  neutral: { track: '#e4e4e7', fill: '#71717a' },
};

const sizeMap = {
  sm: { svgSize: 48, strokeWidth: 4, fontSize: 'text-xs' },
  md: { svgSize: 64, strokeWidth: 5, fontSize: 'text-sm' },
  lg: { svgSize: 80, strokeWidth: 6, fontSize: 'text-base' },
  xl: { svgSize: 96, strokeWidth: 7, fontSize: 'text-lg' },
};

export function CircularProgress({
  value = 0,
  max = 100,
  size = 'md',
  color = 'primary',
  showValue = true,
  label,
  thickness,
  className,
  ...props
}) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const { svgSize, strokeWidth: defaultStroke, fontSize } = sizeMap[size] ?? sizeMap.md;
  const strokeWidth = thickness ?? defaultStroke;
  const radius = (svgSize - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const colors = colorMap[color] ?? colorMap.primary;

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={label ?? 'Circular progress'}
      className={cn('relative inline-flex items-center justify-center', className)}
      {...props}
    >
      <svg
        width={svgSize}
        height={svgSize}
        className="-rotate-90"
        aria-hidden="true"
      >
        <circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={radius}
          fill="none"
          stroke={colors.track}
          strokeWidth={strokeWidth}
          className="dark:opacity-30"
        />
        <circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={radius}
          fill="none"
          stroke={colors.fill}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
        />
      </svg>
      {showValue && (
        <span
          className={cn(
            'absolute font-semibold text-zinc-900 dark:text-zinc-100',
            fontSize
          )}
        >
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
}

CircularProgress.displayName = 'CircularProgress';