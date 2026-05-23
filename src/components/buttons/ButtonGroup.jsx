import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

const ButtonGroup = forwardRef(
  ({ children, orientation = 'horizontal', size = 'md', className, ...props }, ref) => {
    const baseStyles = 'inline-flex';
    const orientationStyles =
      orientation === 'vertical' ? 'flex-col' : 'flex-row';

    const childrenArray = React.Children.toArray(children);

    return (
      <motion.div
        ref={ref}
        role="group"
        className={cn(baseStyles, orientationStyles, className)}
        {...props}
      >
        {childrenArray.map((child, index) => {
          const isFirst = index === 0;
          const isLast = index === childrenArray.length - 1;

          let roundedStyles = '';
          if (orientation === 'horizontal') {
            if (isFirst) roundedStyles = 'rounded-l-md rounded-r-none';
            else if (isLast) roundedStyles = 'rounded-r-md rounded-l-none';
            else roundedStyles = 'rounded-none';
          } else {
            if (isFirst) roundedStyles = 'rounded-t-md rounded-b-none';
            else if (isLast) roundedStyles = 'rounded-b-md rounded-t-none';
            else roundedStyles = 'rounded-none';
          }

          const borderStyles =
            !isLast && orientation === 'horizontal'
              ? 'border-r border-neutral-300 dark:border-neutral-600'
              : !isLast && orientation === 'vertical'
                ? 'border-b border-neutral-300 dark:border-neutral-600'
                : '';

          return React.cloneElement(child, {
            key: index,
            size,
            className: cn(roundedStyles, borderStyles, child.props.className),
            variant: child.props.variant || 'outline',
          });
        })}
      </motion.div>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };