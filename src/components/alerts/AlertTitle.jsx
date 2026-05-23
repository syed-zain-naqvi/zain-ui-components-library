import React from 'react';
import { cn } from '../../utils/cn';

export function AlertTitle({ className, children, ...props }) {
  return (
    <p
      className={cn('font-semibold leading-tight mb-0.5', className)}
      {...props}
    >
      {children}
    </p>
  );
}

AlertTitle.displayName = 'AlertTitle';