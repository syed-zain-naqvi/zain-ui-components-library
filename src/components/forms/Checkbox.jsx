import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { generateId } from '../../utils/generateId';

const sizeMap = {
  sm: { box: 'h-4 w-4', label: 'text-sm', wrapper: 'gap-2' },
  md: { box: 'h-5 w-5', label: 'text-sm', wrapper: 'gap-2.5' },
  lg: { box: 'h-6 w-6', label: 'text-base', wrapper: 'gap-3' },
};

export const Checkbox = forwardRef(function Checkbox(
  {
    id,
    label,
    helperText,
    size = 'md',
    isDisabled = false,
    isIndeterminate = false,
    colorScheme = 'primary',
    className,
    ...props
  },
  ref
) {
  const checkboxId = id || generateId('checkbox');
  const s = sizeMap[size];

  const colorMap = {
    primary: 'accent-primary-600',
    accent: 'accent-accent-600',
    success: 'accent-green-600',
    danger: 'accent-red-600',
  };

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <label
        htmlFor={checkboxId}
        className={cn(
          'flex items-center cursor-pointer select-none',
          s.wrapper,
          isDisabled && 'opacity-50 cursor-not-allowed'
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          disabled={isDisabled}
          className={cn(
            'rounded border-gray-300 dark:border-gray-600 cursor-pointer transition-all',
            s.box,
            colorMap[colorScheme]
          )}
          ref={(el) => {
            if (el) el.indeterminate = isIndeterminate;
            if (typeof ref === 'function') ref(el);
            else if (ref) ref.current = el;
          }}
          {...props}
        />
        {label && (
          <span className={cn('text-gray-700 dark:text-gray-300 font-medium', s.label)}>
            {label}
          </span>
        )}
      </label>
      {helperText && (
        <p className="ml-7 text-xs text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
    </div>
  );
});