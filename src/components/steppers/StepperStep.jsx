import React from 'react';
import PropTypes from 'prop-types';

export const StepperStep = ({
  children,
  label,
  description = null,
  stepNumber = 1,
  isActive = false,
  isCompleted = false,
  orientation = 'horizontal',
  className = '',
  ...props
}) => {
  const statusClasses = isCompleted
    ? 'bg-green-500 text-white border-green-500'
    : isActive
      ? 'bg-blue-500 text-white border-blue-500'
      : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600';

  const labelClasses = isActive
    ? 'text-blue-600 dark:text-blue-400 font-semibold'
    : isCompleted
      ? 'text-green-600 dark:text-green-400 font-semibold'
      : 'text-gray-700 dark:text-gray-300';

  return (
    <div
      className={`flex ${
        orientation === 'vertical' ? 'flex-col gap-2' : 'flex-col items-center gap-2'
      } ${className}`}
      {...props}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold transition-all ${statusClasses}`}
          role="status"
          aria-label={`Step ${stepNumber}: ${isCompleted ? 'Completed' : isActive ? 'Current' : 'Not started'}`}
        >
          {isCompleted ? '✓' : stepNumber}
        </div>
        <div className="flex flex-col">
          <span className={`text-sm ${labelClasses}`}>{label}</span>
          {description && <span className="text-xs text-gray-500 dark:text-gray-400">{description}</span>}
        </div>
      </div>
      {children && <div className="mt-2 ml-14">{children}</div>}
    </div>
  );
};

StepperStep.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  stepNumber: PropTypes.number,
  isActive: PropTypes.bool,
  isCompleted: PropTypes.bool,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  className: PropTypes.string,
};
