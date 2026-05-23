import { cn } from '../../utils/cn';

const tagMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

const sizeMap = {
  h1: 'text-5xl font-extrabold tracking-tight leading-tight',
  h2: 'text-4xl font-bold tracking-tight leading-snug',
  h3: 'text-3xl font-bold tracking-tight leading-snug',
  h4: 'text-2xl font-semibold tracking-tight leading-normal',
  h5: 'text-xl font-semibold leading-normal',
  h6: 'text-lg font-semibold leading-normal',
};

const colorMap = {
  default: 'text-gray-900 dark:text-white',
  muted: 'text-gray-500 dark:text-gray-400',
  primary: 'text-primary-600 dark:text-primary-400',
  accent: 'text-accent-600 dark:text-accent-400',
  danger: 'text-red-600 dark:text-red-400',
  success: 'text-green-600 dark:text-green-400',
  warning: 'text-yellow-600 dark:text-yellow-400',
};

export function Heading({
  as,
  size = 'h2',
  color = 'default',
  truncate = false,
  gradient = false,
  className,
  children,
  ...props
}) {
  const Tag = as || tagMap[size] || 'h2';

  return (
    <Tag
      className={cn(
        sizeMap[size],
        !gradient && colorMap[color],
        gradient &&
          'bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent',
        truncate && 'truncate',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}