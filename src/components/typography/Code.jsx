import { cn } from '../../utils/cn';

const variantMap = {
  inline:
    'inline-block rounded px-1.5 py-0.5 font-mono text-sm bg-gray-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400 border border-gray-200 dark:border-gray-700',
  block:
    'block w-full rounded-lg font-mono text-sm bg-gray-900 dark:bg-gray-950 text-gray-100 border border-gray-700 dark:border-gray-800 p-4 overflow-x-auto whitespace-pre',
};

export function Code({ variant = 'inline', className, children, ...props }) {
  if (variant === 'block') {
    return (
      <pre
        className={cn(variantMap.block, className)}
        {...props}
      >
        <code>{children}</code>
      </pre>
    );
  }

  return (
    <code
      className={cn(variantMap.inline, className)}
      {...props}
    >
      {children}
    </code>
  );
}
