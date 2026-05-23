import React from 'react';
import PropTypes from 'prop-types';

export const StepperConnector = ({
  isCompleted = false,
  isActive = false,
  orientation = 'horizontal',
  className = '',
  ...props
}) => {
  const baseColor = isCompleted
    ? 'bg-green-500'
    : isActive
      ? 'bg-blue-500'
      : 'bg-gray-300 dark:bg-gray-600';

  const sizeClasses =
    orientation === 'horizontal' ? 'h-1 flex-1' : 'w-1 h-8';

  return (
    <div
      className={`${baseColor} ${sizeClasses} transition-all ${className}`}
      {...props}
    />
  );
};

StepperConnector.propTypes = {
  isCompleted: PropTypes.bool,
  isActive: PropTypes.bool,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  className: PropTypes.string,
};
