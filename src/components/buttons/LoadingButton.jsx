import React, { forwardRef, useState } from 'react';
import { Button } from './Button';

const LoadingButton = forwardRef(
  (
    {
      onClick,
      isLoading: externalIsLoading = false,
      loadingText = 'Loading...',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const [internalLoading, setInternalLoading] = useState(false);
    const isLoading = externalIsLoading || internalLoading;

    const handleClick = async (e) => {
      if (onClick) {
        setInternalLoading(true);
        try {
          const result = onClick(e);
          if (result instanceof Promise) {
            await result;
          }
        } finally {
          setInternalLoading(false);
        }
      }
    };

    return (
      <Button
        ref={ref}
        onClick={handleClick}
        isLoading={isLoading}
        isDisabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? loadingText : children}
      </Button>
    );
  }
);

LoadingButton.displayName = 'LoadingButton';

export { LoadingButton };