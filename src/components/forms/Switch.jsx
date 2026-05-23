import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { generateId } from '../../utils/generateId';

const sizeMap = {
  sm: {
    track: 'h-5 w-9',
    thumb: 'h-3.5 w-3.5',
    translateOn: 'translate-x-4',
    translateOff: 'translate-x-0.5',
    label: 'text-sm',
  },
  md: {
    track: 'h-6 w-11',
    thumb: 'h-4.5 w-4.5 h-[18px] w-[18px]',
    translateOn: 'translate-x-5',
    translateOff: 'translate-x-0.5',
    label: 'text-sm',
  },
  lg: {
    track: 'h-7 w-[52px]',
    thumb: 'h-5 w-5',
    translateOn: 'translate-x-6',
    translateOff: 'translate-x-1',
    label: 'text-base',
  },
};

const colorMap = {
  primary: 'bg-primary-600',
  accent: 'bg-accent-600',
  success: 'bg-green-500',
  danger: 'bg-red-500',
  warning: 'bg-yellow-500',
};

export const Switch = forwardRef(function Switch(
  {
    id,
    label,
    helperText,
    size = 'md',
    colorScheme = 'primary',
    isDisabled = false,
    checked,
    onChange,
    className,
    ...props
  },
  ref
) {
  const switchId = id || generateId('switch');
  const s = sizeMap[size];

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <label
        htmlFor={switchId}
        className={cn(
          'flex items-center gap-3 cursor-pointer select-none',
          isDisabled && 'opacity-50 cursor-not-allowed'
        )}
      >
        <div className="relative flex-shrink-0">
          <input
            ref={ref}
            type="checkbox"
            id={switchId}
            role="switch"
            aria-checked={checked}
            disabled={isDisabled}
            checked={checked}
            onChange={onChange}
            className="sr-only"
            {...props}
          />
          <div
            className={cn(
              'relative rounded-full transition-colors duration-200',
              s.track,
              checked ? colorMap[colorScheme] : 'bg-gray-300 dark:bg-gray-600'
            )}
          >
            <div
              className={cn(
                'absolute top-1/2 -translate-y-1/2 rounded-full bg-white shadow-sm transition-transform duration-200',
                s.thumb,
                checked ? s.translateOn : s.translateOff
              )}
            />
          </div>
        </div>
        {label && (
          <span className={cn('text-gray-700 dark:text-gray-300 font-medium', s.label)}>
            {label}
          </span>
        )}
      </label>
      {helperText && (
        <p className="ml-14 text-xs text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
    </div>
  );
});