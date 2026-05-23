import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { generateId } from '../../utils/generateId';

export const Slider = forwardRef(function Slider(
  {
    id,
    label,
    helperText,
    min = 0,
    max = 100,
    step = 1,
    value,
    onChange,
    showValue = false,
    showMinMax = false,
    colorScheme = 'primary',
    isDisabled = false,
    className,
    ...props
  },
  ref
) {
  const sliderId = id || generateId('slider');

  const percentage = ((value - min) / (max - min)) * 100;

  const accentColorMap = {
    primary: '#4f46e5',
    accent: '#0ea5e9',
    success: '#22c55e',
    danger: '#ef4444',
    warning: '#f59e0b',
  };

  const trackColor = accentColorMap[colorScheme] || accentColorMap.primary;

  return (
    <div className={cn('flex flex-col gap-2 w-full', className)}>
      <div className="flex items-center justify-between">
        {label && (
          <label
            htmlFor={sliderId}
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {label}
          </label>
        )}
        {showValue && (
          <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
            {value}
          </span>
        )}
      </div>
      <input
        ref={ref}
        type="range"
        id={sliderId}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
        style={{
          background: `linear-gradient(to right, ${trackColor} ${percentage}%, #e5e7eb ${percentage}%)`,
        }}
        className={cn(
          'w-full h-2 rounded-full appearance-none cursor-pointer outline-none',
          'dark:[background:linear-gradient(to_right,var(--tw-gradient-stops))]',
          '[&::-webkit-slider-thumb]:appearance-none',
          '[&::-webkit-slider-thumb]:h-5',
          '[&::-webkit-slider-thumb]:w-5',
          '[&::-webkit-slider-thumb]:rounded-full',
          '[&::-webkit-slider-thumb]:bg-white',
          '[&::-webkit-slider-thumb]:border-2',
          '[&::-webkit-slider-thumb]:border-primary-500',
          '[&::-webkit-slider-thumb]:shadow-md',
          '[&::-webkit-slider-thumb]:cursor-pointer',
          '[&::-webkit-slider-thumb]:transition-transform',
          '[&::-webkit-slider-thumb]:hover:scale-110',
          '[&::-moz-range-thumb]:h-5',
          '[&::-moz-range-thumb]:w-5',
          '[&::-moz-range-thumb]:rounded-full',
          '[&::-moz-range-thumb]:bg-white',
          '[&::-moz-range-thumb]:border-2',
          '[&::-moz-range-thumb]:border-primary-500',
          '[&::-moz-range-thumb]:shadow-md',
          '[&::-moz-range-thumb]:cursor-pointer',
          isDisabled && 'opacity-50 cursor-not-allowed'
        )}
        {...props}
      />
      {showMinMax && (
        <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
      {helperText && (
        <p className="text-xs text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
    </div>
  );
});