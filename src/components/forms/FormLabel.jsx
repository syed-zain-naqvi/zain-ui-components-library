import { cn } from '../../utils/cn';

export function FormLabel({
  htmlFor,
  isRequired = false,
  isOptional = false,
  size = 'md',
  className,
  children,
  ...props
}) {
  const sizeMap = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'font-medium text-gray-700 dark:text-gray-300',
        sizeMap[size],
        className
      )}
      {...props}
    >
      {children}
      {isRequired && (
        <span className="ml-1 text-red-500" aria-hidden="true">*</span>
      )}
      {isOptional && (
        <span className="ml-1.5 text-xs font-normal text-gray-400 dark:text-gray-500">
          (optional)
        </span>
      )}
    </label>
  );
}