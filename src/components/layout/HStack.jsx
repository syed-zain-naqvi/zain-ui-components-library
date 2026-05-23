import React, { forwardRef } from 'react';
import { Stack } from './Stack';

const HStack = forwardRef(({ children, spacing = 'md', className, ...props }, ref) => {
  return (
    <Stack
      ref={ref}
      direction="row"
      spacing={spacing}
      align="center"
      className={className}
      {...props}
    >
      {children}
    </Stack>
  );
});

HStack.displayName = 'HStack';

export { HStack };