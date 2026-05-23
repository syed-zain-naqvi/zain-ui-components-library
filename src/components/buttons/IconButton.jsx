import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { getColorSchemeClasses } from '@/utils/colorUtils';
import { motion } from 'framer-motion';
import { tapVariants } from '@/utils/animationVariants';

const IconButton = forwardRef(
  (
    {
      icon,
      variant = 'ghost',
      size = 'md',
      colorScheme = 'primary',
      isLoading = false,
      isDisabled = false,
      className,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-md transition-all duration-fast focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeMap = {
      xs: 'h-6 w-6',
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-12 w-12',
      xl: 'h-14 w-14',
    };

    const iconSizeMap = {
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-7 w-7',
    };

    const variantStyles = getColorSchemeClasses(colorScheme, variant);
    const sizeStyles = sizeMap[size] || sizeMap.md;
    const iconSize = iconSizeMap[size] || iconSizeMap.md;

    return (
      <motion.button
        ref={ref}
        type="button"
        disabled={isDisabled || isLoading}
        className={cn(baseStyles, variantStyles, sizeStyles, className)}
        variants={tapVariants}
        whileTap="tap"
        whileHover={{ scale: 1.05 }}
        aria-label={ariaLabel}
        {...props}
      >
        {isLoading ? (
          <svg
            className={cn('animate-spin', iconSize)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          <span className={cn('flex items-center justify-center', iconSize)}>{icon}</span>
        )}
      </motion.button>
    );
  }
);

IconButton.displayName = 'IconButton';

export { IconButton };