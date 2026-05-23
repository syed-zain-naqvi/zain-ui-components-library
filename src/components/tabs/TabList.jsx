import React from 'react';
import PropTypes from 'prop-types';

export const TabList = ({
  children,
  variant = 'default',
  orientation = 'horizontal',
  className = '',
  ...props
}) => {
  const variantClasses = {
    default:
      'border-b-2 border-gray-200 dark:border-gray-700 flex gap-0',
    pills: 'gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg inline-flex',
    underline:
      'border-b-2 border-gray-300 dark:border-gray-600 flex gap-0',
  };

  const orientationClasses =
    orientation === 'vertical'
      ? 'flex-col border-r-2 border-gray-200 dark:border-gray-700 pr-4 w-auto'
      : 'flex-row';

  return (
    <div
      role="tablist"
      className={`${variantClasses[variant]} ${orientationClasses} ${className}`}
      aria-orientation={orientation}
      {...props}
    >
      {children}
    </div>
  );
};

TabList.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'pills', 'underline']),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  className: PropTypes.string,
};
