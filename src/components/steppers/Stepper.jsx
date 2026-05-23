import React from 'react';
import PropTypes from 'prop-types';

export const Stepper = ({
  children,
  currentStep = 1,
  orientation = 'horizontal',
  variant = 'default',
  className = '',
  ...props
}) => {
  const variantClasses = {
    default: '',
    numbered: '',
  };

  const orientationClasses = {
    horizontal: 'flex flex-row items-center gap-4',
    vertical: 'flex flex-col gap-4',
  };

  return (
    <div
      className={`${orientationClasses[orientation]} ${variantClasses[variant]} ${className}`}
      role="progressbar"
      aria-valuenow={currentStep}
      {...props}
    >
      {React.Children.map(children, (child, idx) =>
        React.cloneElement(child, {
          stepNumber: idx + 1,
          isActive: idx + 1 === currentStep,
          isCompleted: idx + 1 < currentStep,
          orientation,
        })
      )}
    </div>
  );
};

Stepper.propTypes = {
  children: PropTypes.node.isRequired,
  currentStep: PropTypes.number,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  variant: PropTypes.oneOf(['default', 'numbered']),
  className: PropTypes.string,
};
