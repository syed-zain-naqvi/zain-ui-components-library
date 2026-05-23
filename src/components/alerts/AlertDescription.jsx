import React from 'react';
import { cn } from '../../utils/cn';

export function AlertDescription({ className, children, ...props }) {
  return (
    <p
      className={cn('text-sm opacity-90 leading-relaxed', className)}
      {...props}
    >
      {children}
    </p>
  );
}

AlertDescription.displayName = 'AlertDescription';