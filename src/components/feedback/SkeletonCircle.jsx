import React from 'react';
import { cn } from '../../utils/cn';
import { Skeleton } from './Skeleton';

const sizeMap = {
  xs: '1.5rem',
  sm: '2rem',
  md: '2.5rem',
  lg: '3rem',
  xl: '4rem',
  '2xl': '5rem',
};

export function SkeletonCircle({
  size = 'md',
  animate = true,
  className,
  ...props
}) {
  const dimension = sizeMap[size] ?? size;

  return (
    <Skeleton
      width={dimension}
      height={dimension}
      rounded="full"
      animate={animate}
      className={cn('flex-shrink-0', className)}
      {...props}
    />
  );
}

SkeletonCircle.displayName = 'SkeletonCircle';