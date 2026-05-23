import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

export const Tab = ({
  children,
  disabled = false,
  tabIndex = 0,
  isActive = false,
  onTabChange = null,
  variant = 'default',
  icon = null,
  className = '',
  ...props
}) => {
  const variantClasses = useMemo(() => {
    const base = `px-4 py-2 font-medium transition-all rounded-md ${
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
    }`;

    if (isActive) {
      if (variant === 'pills') {
        return `${base} bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm`;
      }
      if (variant === 'underline') {
        return `${base} text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400`;
      }
      return `${base} text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400`;
    }

    if (variant === 'pills') {
      return `${base} text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700`;
    }

    return `${base} text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100`;
  }, [isActive, variant, disabled]);

  const handleClick = () => {
    if (!disabled && onTabChange) {
      onTabChange(tabIndex);
    }
  };

  const handleKeyDown = (e) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-disabled={disabled}
      className={`${variantClasses} ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      {...props}
    >
      <span className="flex items-center gap-2">
        {icon && <span className="text-lg">{icon}</span>}
        {children}
      </span>
    </button>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  isActive: PropTypes.bool,
  onTabChange: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'pills', 'underline']),
  icon: PropTypes.node,
  className: PropTypes.string,
};
