import { cn } from '../../utils/cn';
import { generateId } from '../../utils/generateId';

const sizeMap = {
  sm: { circle: 'h-4 w-4', label: 'text-sm', wrapper: 'gap-2' },
  md: { circle: 'h-5 w-5', label: 'text-sm', wrapper: 'gap-2.5' },
  lg: { circle: 'h-6 w-6', label: 'text-base', wrapper: 'gap-3' },
};

export function RadioGroup({
  label,
  name,
  options = [],
  value,
  onChange,
  orientation = 'vertical',
  size = 'md',
  colorScheme = 'primary',
  isDisabled = false,
  helperText,
  errorMessage,
  isInvalid = false,
  className,
}) {
  const groupName = name || generateId('radio-group');
  const s = sizeMap[size];

  const colorMap = {
    primary: 'accent-primary-600',
    accent: 'accent-accent-600',
    success: 'accent-green-600',
    danger: 'accent-red-600',
  };

  return (
    <fieldset className={cn('flex flex-col gap-2 border-0 p-0 m-0', className)}>
      {label && (
        <legend className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </legend>
      )}
      <div
        className={cn(
          'flex',
          orientation === 'vertical' ? 'flex-col gap-2' : 'flex-row flex-wrap gap-6'
        )}
      >
        {options.map((option) => {
          const optionId = `${groupName}-${option.value}`;
          return (
            <label
              key={option.value}
              htmlFor={optionId}
              className={cn(
                'flex items-center cursor-pointer select-none',
                s.wrapper,
                (isDisabled || option.disabled) && 'opacity-50 cursor-not-allowed'
              )}
            >
              <input
                type="radio"
                id={optionId}
                name={groupName}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange && onChange(option.value)}
                disabled={isDisabled || option.disabled}
                className={cn('cursor-pointer transition-all', s.circle, colorMap[colorScheme])}
              />
              <span className={cn('text-gray-700 dark:text-gray-300 font-medium', s.label)}>
                {option.label}
              </span>
            </label>
          );
        })}
      </div>
      {isInvalid && errorMessage && (
        <p className="text-xs text-red-500 dark:text-red-400">{errorMessage}</p>
      )}
      {helperText && !isInvalid && (
        <p className="text-xs text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
    </fieldset>
  );
}