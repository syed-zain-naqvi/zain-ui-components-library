import React from 'react';
import { cn } from '../../utils/cn';
import { AlertIcon } from './AlertIcon';
import { AlertTitle } from './AlertTitle';
import { AlertDescription } from './AlertDescription';

const alertVariants = {
  info: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-950/40 dark:border-blue-800 dark:text-blue-200',
  success: 'bg-green-50 border-green-200 text-green-800 dark:bg-green-950/40 dark:border-green-800 dark:text-green-200',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-950/40 dark:border-yellow-800 dark:text-yellow-200',
  error: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-950/40 dark:border-red-800 dark:text-red-200',
  neutral: 'bg-zinc-50 border-zinc-200 text-zinc-800 dark:bg-zinc-900/60 dark:border-zinc-700 dark:text-zinc-200',
};

const alertSizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-3 text-sm',
  lg: 'px-5 py-4 text-base',
};

export function Alert({
  variant = 'info',
  size = 'md',
  title,
  description,
  icon,
  showIcon = true,
  closable = false,
  onClose,
  className,
  children,
  ...props
}) {
  const [visible, setVisible] = React.useState(true);

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  if (!visible) return null;

  return (
    <div
      role="alert"
      className={cn(
        'relative flex gap-3 rounded-lg border',
        alertVariants[variant],
        alertSizes[size],
        className
      )}
      {...props}
    >
      {showIcon && (
        <div className="flex-shrink-0 mt-0.5">
          <AlertIcon variant={variant} customIcon={icon} />
        </div>
      )}
      <div className="flex-1 min-w-0">
        {title && <AlertTitle>{title}</AlertTitle>}
        {description && <AlertDescription>{description}</AlertDescription>}
        {children}
      </div>
      {closable && (
        <button
          type="button"
          onClick={handleClose}
          className="flex-shrink-0 ml-auto -mr-1 -mt-0.5 p-1 rounded-md opacity-60 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-current"
          aria-label="Close alert"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

Alert.displayName = 'Alert';