import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { generateId } from '../../utils/generateId';

const sizeMap = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-3 text-sm',
  lg: 'h-12 px-4 text-base',
};

export const DatePicker = forwardRef(function DatePicker(
  {
    id,
    label,
    helperText,
    errorMessage,
    size = 'md',
    isDisabled = false,
    isRequired = false,
    isInvalid = false,
    type = 'date',
    min,
    max,
    className,
    inputClassName,
    ...props
  },
  ref
) {
  const dateId = id || generateId('datepicker');

  return (
    <div className={cn('flex flex-col gap-1.5 w-full', className)}>
      {label && (
        <label
          htmlFor={dateId}
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
          {isRequired && (
            <span className="ml-1 text-red-500" aria-hidden="true">*</span>
          )}
        </label>
      )}
      <div className="relative">
        <input
          ref={ref}
          type={type}
          id={dateId}
          disabled={isDisabled}
          required={isRequired}
          aria-invalid={isInvalid}
          min={min}
          max={max}
          className={cn(
            'w-full rounded-lg border bg-white dark:bg-gray-900 outline-none transition-all duration-150',
            'text-gray-900 dark:text-white',
            'dark:[color-scheme:dark]',
            sizeMap[size],
            isInvalid
              ? 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/30'
              : 'border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30',
            isDisabled && 'opacity-50 cursor-not-allowed bg-gray-50 dark:bg-gray-800',
            inputClassName
          )}
          {...props}
        />
      </div>
      {isInvalid && errorMessage && (
        <p className="text-xs text-red-500 dark:text-red-400">{errorMessage}</p>
      )}
      {helperText && !isInvalid && (
        <p className="text-xs text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
    </div>
  );
});