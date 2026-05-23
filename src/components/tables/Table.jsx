import React from 'react';
import PropTypes from 'prop-types';

export const Table = ({
  children,
  size = 'md',
  variant = 'default',
  striped = false,
  hover = false,
  borderless = false,
  responsive = true,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const variantClasses = {
    default: 'border-gray-200 dark:border-gray-700',
    bordered: 'border-2 border-gray-300 dark:border-gray-600',
    minimal: 'border-b-2 border-gray-300 dark:border-gray-600',
  };

  const baseClasses = `w-full border-collapse ${sizeClasses[size]} ${variantClasses[variant]}`;
  const stripedClasses = striped ? 'tbody tr:nth-child(odd) bg-gray-50 dark:bg-gray-800' : '';
  const hoverClasses = hover ? 'tbody tr:hover bg-gray-100 dark:hover:bg-gray-700 transition-colors' : '';

  const wrapper = responsive ? (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <table className={`${baseClasses} ${stripedClasses} ${hoverClasses} ${className}`} {...props}>
        {children}
      </table>
    </div>
  ) : (
    <table className={`${baseClasses} ${stripedClasses} ${hoverClasses} ${className}`} {...props}>
      {children}
    </table>
  );

  return borderless ? (
    <table className={`${baseClasses.replace('border-', '')} ${className}`} {...props}>
      {children}
    </table>
  ) : (
    wrapper
  );
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['default', 'bordered', 'minimal']),
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  borderless: PropTypes.bool,
  responsive: PropTypes.bool,
  className: PropTypes.string,
};
