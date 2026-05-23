import { cn } from '../../utils/cn';
import { Checkbox } from './Checkbox';
import { generateId } from '../../utils/generateId';

export function CheckboxGroup({
  label,
  options = [],
  value = [],
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
  const groupId = generateId('checkbox-group');

  const handleChange = (optionValue) => {
    if (!onChange) return;
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
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
          orientation === 'vertical' ? 'flex-col gap-2' : 'flex-row flex-wrap gap-4'
        )}
        role="group"
        aria-labelledby={`${groupId}-label`}
      >
        {options.map((option) => (
          <Checkbox
            key={option.value}
            id={`${groupId}-${option.value}`}
            label={option.label}
            checked={value.includes(option.value)}
            onChange={() => handleChange(option.value)}
            isDisabled={isDisabled || option.disabled}
            size={size}
            colorScheme={colorScheme}
          />
        ))}
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