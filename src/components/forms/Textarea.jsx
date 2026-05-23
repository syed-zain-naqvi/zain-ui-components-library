import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { generateId } from '../../utils/generateId';

export const Textarea = forwardRef(function Textarea(
  {
    id,
    label,
    helperText,
    errorMessage,
    isDisabled = false,
    isReadOnly = false,
    isRequired = false,
    isInvalid = false,
    rows = 4,
    resize = 'vertical',
    className,
    textareaClassName,
    ...props
  },
  ref
) {
  const textareaId = id || generateId('textarea');

  const resizeMap = {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize',
  };

  return (
    <div className={cn('flex flex-col gap-1.5 w-full', className)}>
      {label && (
        <label
          htmlFor={textareaId}
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
          {isRequired && (
            <span className="ml-1 text-red-500" aria-hidden="true">*</span>
          )}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        disabled={isDisabled}
        readOnly={isReadOnly}
        required={isRequired}
        aria-invalid={isInvalid}
        rows={rows}
        className={cn(
          'w-full rounded-lg border bg-white dark:bg-gray-900 px-3 py-2 text-sm outline-none transition-all duration-150',
          'text-gray-900 dark:text-white',
          'placeholder:text-gray-400 dark:placeholder:text-gray-600',
          resizeMap[resize],
          isInvalid
            ? 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/30'
            : 'border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30',
          isDisabled && 'opacity-50 cursor-not-allowed bg-gray-50 dark:bg-gray-800',
          isReadOnly && 'bg-gray-50 dark:bg-gray-800 cursor-default',
          textareaClassName
        )}
        {...props}
      />
      {isInvalid && errorMessage && (
        <p className="text-xs text-red-500 dark:text-red-400">{errorMessage}</p>
      )}
      {helperText && !isInvalid && (
        <p className="text-xs text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
    </div>
  );
});