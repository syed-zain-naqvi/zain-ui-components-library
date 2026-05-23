import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

const Container = forwardRef(
  (
    {
      children,
      maxWidth = 'md',
      centerContent = true,
      px = 'md',
      py = '0',
      className,
      ...props
    },
    ref
  ) => {
    const maxWidthMap = {
      xs: 'max-w-xs',
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      '2xl': 'max-w-2xl',
      '3xl': 'max-w-3xl',
      '4xl': 'max-w-4xl',
      '5xl': 'max-w-5xl',
      '6xl': 'max-w-6xl',
      '7xl': 'max-w-7xl',
      full: 'max-w-full',
    };

    const pxMap = {
      xs: 'px-1',
      sm: 'px-2',
      md: 'px-4',
      lg: 'px-6',
      xl: 'px-8',
    };

    const pyMap = {
      '0': 'py-0',
      xs: 'py-1',
      sm: 'py-2',
      md: 'py-4',
      lg: 'py-6',
      xl: 'py-8',
    };

    const baseStyles = 'w-full';
    const centerStyles = centerContent ? 'mx-auto' : '';
    const maxWidthStyles = maxWidthMap[maxWidth] || maxWidthMap.md;
    const pxStyles = pxMap[px] || pxMap.md;
    const pyStyles = pyMap[py] || pyMap['0'];

    return (
      <div
        ref={ref}
        className={cn(baseStyles, centerStyles, maxWidthStyles, pxStyles, pyStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export { Container };