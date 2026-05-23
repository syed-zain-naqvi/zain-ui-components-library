import { cn } from '../../utils/cn';

const variantMap = {
  default: 'bg-yellow-200 dark:bg-yellow-400/30 text-yellow-900 dark:text-yellow-200',
  primary: 'bg-primary-100 dark:bg-primary-400/30 text-primary-900 dark:text-primary-200',
  accent: 'bg-accent-100 dark:bg-accent-400/30 text-accent-900 dark:text-accent-200',
  success: 'bg-green-100 dark:bg-green-400/30 text-green-900 dark:text-green-200',
  danger: 'bg-red-100 dark:bg-red-400/30 text-red-900 dark:text-red-200',
};

export function Mark({ variant = 'default', className, children, ...props }) {
  return (
    <mark
      className={cn(
        'rounded px-1 py-0.5 font-medium',
        variantMap[variant],
        className
      )}
      {...props}
    >
      {children}
    </mark>
  );
}