export const getColorSchemeClasses = (colorScheme, variant = 'solid') => {
  const colorMap = {
    primary: {
      solid: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
      outline:
        'border border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950',
      ghost: 'text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950',
      soft: 'bg-primary-100 text-primary-900 hover:bg-primary-200 dark:bg-primary-900 dark:text-primary-100',
      link: 'text-primary-600 hover:underline',
    },
    secondary: {
      solid: 'bg-secondary-600 text-white hover:bg-secondary-700 active:bg-secondary-800',
      outline:
        'border border-secondary-600 text-secondary-600 hover:bg-secondary-50 dark:hover:bg-secondary-950',
      ghost: 'text-secondary-600 hover:bg-secondary-50 dark:hover:bg-secondary-950',
      soft: 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200 dark:bg-secondary-900 dark:text-secondary-100',
      link: 'text-secondary-600 hover:underline',
    },
    success: {
      solid: 'bg-success-600 text-white hover:bg-success-700 active:bg-success-800',
      outline:
        'border border-success-600 text-success-600 hover:bg-success-50 dark:hover:bg-success-950',
      ghost: 'text-success-600 hover:bg-success-50 dark:hover:bg-success-950',
      soft: 'bg-success-100 text-success-900 hover:bg-success-200 dark:bg-success-900 dark:text-success-100',
      link: 'text-success-600 hover:underline',
    },
    warning: {
      solid: 'bg-warning-600 text-white hover:bg-warning-700 active:bg-warning-800',
      outline:
        'border border-warning-600 text-warning-600 hover:bg-warning-50 dark:hover:bg-warning-950',
      ghost: 'text-warning-600 hover:bg-warning-50 dark:hover:bg-warning-950',
      soft: 'bg-warning-100 text-warning-900 hover:bg-warning-200 dark:bg-warning-900 dark:text-warning-100',
      link: 'text-warning-600 hover:underline',
    },
    danger: {
      solid: 'bg-danger-600 text-white hover:bg-danger-700 active:bg-danger-800',
      outline:
        'border border-danger-600 text-danger-600 hover:bg-danger-50 dark:hover:bg-danger-950',
      ghost: 'text-danger-600 hover:bg-danger-50 dark:hover:bg-danger-950',
      soft: 'bg-danger-100 text-danger-900 hover:bg-danger-200 dark:bg-danger-900 dark:text-danger-100',
      link: 'text-danger-600 hover:underline',
    },
    neutral: {
      solid: 'bg-neutral-700 text-white hover:bg-neutral-800 active:bg-neutral-900',
      outline:
        'border border-neutral-300 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-600 dark:text-neutral-300',
      ghost: 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800',
      soft: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100',
      link: 'text-neutral-700 hover:underline dark:text-neutral-300',
    },
  };

  return colorMap[colorScheme]?.[variant] || colorMap.primary.solid;
};

export const getSizeClasses = (size) => {
  const sizeMap = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };

  return sizeMap[size] || sizeMap.md;
};

export const getStatusColor = (status) => {
  const statusMap = {
    success: '#22c55e',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
    neutral: '#6b7280',
  };

  return statusMap[status] || statusMap.neutral;
};

export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const rgbToHex = (r, g, b) => {
  return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

export const getContrastColor = (hexColor) => {
  const rgb = hexToRgb(hexColor);
  if (!rgb) return '#000000';

  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return luminance > 0.5 ? '#000000' : '#ffffff';
};
