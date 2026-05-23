import { cn } from '../../utils/cn';

export function Kbd({ className, children, ...props }) {
  return (
    <kbd
      className={cn(
        'inline-flex items-center justify-center',
        'rounded border border-gray-300 dark:border-gray-600',
        'bg-gray-100 dark:bg-gray-800',
        'px-1.5 py-0.5',
        'font-mono text-xs font-semibold',
        'text-gray-700 dark:text-gray-300',
        'shadow-sm',
        'min-w-[1.5rem] text-center',
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}