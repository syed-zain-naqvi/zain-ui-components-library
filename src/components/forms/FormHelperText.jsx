import { cn } from '../../utils/cn';

export function FormHelperText({ id, className, children, ...props }) {
  return (
    <p
      id={id}
      className={cn('text-xs text-gray-500 dark:text-gray-400', className)}
      {...props}
    >
      {children}
    </p>
  );
}