import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

const AspectRatio = forwardRef(
  ({ children, ratio = 1, className, ...props }, ref) => {
    const ratioMap = {
      1: 'aspect-square',
      '4/3': 'aspect-video',
      '16/9': 'aspect-video',
      '21/9': 'aspect-auto',
      '9/16': 'aspect-auto',
      '3/4': 'aspect-auto',
    };

    const aspectStyles = ratioMap[ratio] || 'aspect-square';
    const paddingBottom = typeof ratio === 'number' ? (1 / ratio) * 100 : null;

    if (paddingBottom) {
      return (
        <div
          ref={ref}
          className={cn('relative w-full overflow-hidden', className)}
          style={{ paddingBottom: `${paddingBottom}%` }}
          {...props}
        >
          <div className="absolute inset-0">{children}</div>
        </div>
      );
    }

    return (
      <div ref={ref} className={cn('w-full', aspectStyles, className)} {...props}>
        {children}
      </div>
    );
  }
);

AspectRatio.displayName = 'AspectRatio';

export { AspectRatio };