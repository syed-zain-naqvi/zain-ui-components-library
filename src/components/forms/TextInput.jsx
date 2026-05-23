import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { generateId } from '../../utils/generateId';

const sizeMap = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-3 text-sm',
  lg: 'h-12 px-4 text-base',
};

export const TextInput = forwardRef(function TextInput(
  {
    id,
    label,
    helperText,
    errorMessage,
    size = 'md',
    isDisabled = false,
    isReadOnly = false,
    isRequired = false,
    isInvalid = false,
    leftElement,
    rightElement,
    className,
    inputClassName,
    type = 'text',
    ...props
  },
  ref
) {
  const inputId = id || generateId('input');

  return (
    <div className={cn('flex flex-col gap-1.5 w-full', className)}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
          {isRequired && (
            <span className="ml-1 text-red-500" aria-hidden="true">*</span>
          )}
        </label>
      )}
      <div className="relative flex items-center">
        {leftElement && (
          <div className="absolute left-3 flex items-center text-gray-400 dark:text-gray-500 pointer-events-none">
            {leftElement}
          </div>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          disabled={isDisabled}
          readOnly={isReadOnly}
          required={isRequired}
          aria-invalid={isInvalid}
          aria-describedby={
            helperText
              ? `${inputId}-helper`
              : errorMessage
              ? `${inputId}-error`
              : undefined
          }
          className={cn(
            'w-full rounded-lg border bg-white dark:bg-gray-900 outline-none transition-all duration-150',
            'text-gray-900 dark:text-white',
            'placeholder:text-gray-400 dark:placeholder:text-gray-600',
            sizeMap[size],
            leftElement && 'pl-9',
            rightElement && 'pr-9',
            isInvalid
              ? 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/30'
              : 'border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30',
            isDisabled && 'opacity-50 cursor-not-allowed bg-gray-50 dark:bg-gray-800',
            isReadOnly && 'bg-gray-50 dark:bg-gray-800 cursor-default',
            inputClassName
          )}
          {...props}
        />
        {rightElement && (
          <div className="absolute right-3 flex items-center text-gray-400 dark:text-gray-500">
            {rightElement}
          </div>
        )}
      </div>
      {isInvalid && errorMessage && (
        <p id={`${inputId}-error`} className="text-xs text-red-500 dark:text-red-400">
          {errorMessage}
        </p>
      )}
      {helperText && !isInvalid && (
        <p id={`${inputId}-helper`} className="text-xs text-gray-500 dark:text-gray-400">
          {helperText}
        </p>
      )}
    </div>
  );
});