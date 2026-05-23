import React from 'react';
import { cn } from '../../utils/cn';
import { Skeleton } from './Skeleton';

export function SkeletonText({
  lines = 3,
  spacing = 'md',
  lastLineWidth = '60%',
  animate = true,
  className,
  ...props
}) {
  const spacingMap = {
    sm: 'space-y-1.5',
    md: 'space-y-2',
    lg: 'space-y-3',
  };

  return (
    <div
      aria-hidden="true"
      className={cn(spacingMap[spacing] ?? 'space-y-2', className)}
      {...props}
    >
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          animate={animate}
          height="0.875rem"
          width={i === lines - 1 ? lastLineWidth : '100%'}
          rounded="md"
        />
      ))}
    </div>
  );
}

SkeletonText.displayName = 'SkeletonText';