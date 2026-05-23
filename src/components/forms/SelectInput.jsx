import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { generateId } from '../../utils/generateId';

const sizeMap = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-3 text-sm',
  lg: 'h-12 px-4 text-base',
};

export const SelectInput = forwardRef(function SelectInput(
  {
    id,
    label,
    helperText,
    errorMessage,
    options = [],
    placeholder = 'Select an option',
    size = 'md',
    isDisabled = false,
    isRequired = false,
    isInvalid = false,
    className,
    selectClassName,
    ...props
  },
  ref
) {
  const selectId = id || generateId('select');

  return (
    <div className={cn('flex flex-col gap-1.5 w-full', className)}>
      {label && (
        <label
          htmlFor={selectId}
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
          {isRequired && (
            <span className="ml-1 text-red-500" aria-hidden="true">*</span>
          )}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          disabled={isDisabled}
          required={isRequired}
          aria-invalid={isInvalid}
          className={cn(
            'w-full appearance-none rounded-lg border bg-white dark:bg-gray-900 outline-none transition-all duration-150 pr-10',
            'text-gray-900 dark:text-white',
            sizeMap[size],
            isInvalid
              ? 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/30'
              : 'border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30',
            isDisabled && 'opacity-50 cursor-not-allowed bg-gray-50 dark:bg-gray-800',
            selectClassName
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              disabled={opt.disabled}
            >
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
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