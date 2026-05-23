import { cn } from '../../utils/cn';

const sizeMap = {
  xs: 'text-xs leading-4',
  sm: 'text-sm leading-5',
  md: 'text-base leading-6',
  lg: 'text-lg leading-7',
  xl: 'text-xl leading-7',
};

const weightMap = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const colorMap = {
  default: 'text-gray-800 dark:text-gray-200',
  muted: 'text-gray-500 dark:text-gray-400',
  subtle: 'text-gray-400 dark:text-gray-500',
  primary: 'text-primary-600 dark:text-primary-400',
  accent: 'text-accent-600 dark:text-accent-400',
  danger: 'text-red-600 dark:text-red-400',
  success: 'text-green-600 dark:text-green-400',
  warning: 'text-yellow-600 dark:text-yellow-400',
  inherit: 'text-inherit',
};

const alignMap = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

export function Text({
  as = 'p',
  size = 'md',
  weight = 'normal',
  color = 'default',
  align = 'left',
  truncate = false,
  italic = false,
  underline = false,
  strikethrough = false,
  className,
  children,
  ...props
}) {
  const Tag = as;

  return (
    <Tag
      className={cn(
        sizeMap[size],
        weightMap[weight],
        colorMap[color],
        alignMap[align],
        truncate && 'truncate',
        italic && 'italic',
        underline && 'underline underline-offset-2',
        strikethrough && 'line-through',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}