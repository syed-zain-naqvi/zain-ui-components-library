import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { getColorSchemeClasses, getSizeClasses } from '@/utils/colorUtils';
import { motion } from 'framer-motion';
import { tapVariants } from '@/utils/animationVariants';

const Button = forwardRef(
  (
    {
      children,
      variant = 'solid',
      size = 'md',
      colorScheme = 'primary',
      isLoading = false,
      isDisabled = false,
      fullWidth = false,
      leftIcon = null,
      rightIcon = null,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-fast focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles = getColorSchemeClasses(colorScheme, variant);
    const sizeStyles = getSizeClasses(size);
    const widthStyles = fullWidth ? 'w-full' : '';
    const opacityStyles = isLoading ? 'opacity-70' : '';

    return (
      <motion.button
        ref={ref}
        type="button"
        disabled={isDisabled || isLoading}
        className={cn(baseStyles, variantStyles, sizeStyles, widthStyles, opacityStyles, className)}
        variants={tapVariants}
        whileTap="tap"
        whileHover={{ y: -2 }}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg
              className="h-4 w-4 animate-spin"
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
            {children}
          </span>
        ) : (
          <span className="flex items-center gap-2">
            {leftIcon && <span className="flex items-center">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex items-center">{rightIcon}</span>}
          </span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };