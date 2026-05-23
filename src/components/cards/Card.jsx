import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({
  children,
  variant = 'default',
  elevation = 'md',
  interactive = false,
  className = '',
  ...props
}) => {
  const variantClasses = {
    default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    outlined: 'bg-transparent border-2 border-gray-300 dark:border-gray-600',
    filled: 'bg-gray-50 dark:bg-gray-750 border-0',
  };

  const elevationClasses = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  const interactiveClasses = interactive
    ? 'hover:shadow-lg dark:hover:shadow-lg cursor-pointer transition-all duration-200 hover:scale-[1.02]'
    : '';

  return (
    <div
      className={`rounded-lg overflow-hidden ${variantClasses[variant]} ${elevationClasses[elevation]} ${interactiveClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'outlined', 'filled']),
  elevation: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  interactive: PropTypes.bool,
  className: PropTypes.string,
};
