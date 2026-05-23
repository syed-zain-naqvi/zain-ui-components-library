import React from 'react';
import PropTypes from 'prop-types';

export const AccordionButton = ({
  children,
  itemIndex = 0,
  isExpanded = false,
  onToggle = null,
  className = '',
  ...props
}) => {
  const handleClick = () => {
    if (onToggle) {
      onToggle(itemIndex);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`w-full px-6 py-4 flex items-center justify-between text-left font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${className}`}
      aria-expanded={isExpanded}
      role="button"
      {...props}
    >
      <span>{children}</span>
      <span
        className={`text-xl transition-transform duration-300 ${
          isExpanded ? 'rotate-180' : ''
        }`}
      >
        ▼
      </span>
    </button>
  );
};

AccordionButton.propTypes = {
  children: PropTypes.node.isRequired,
  itemIndex: PropTypes.number,
  isExpanded: PropTypes.bool,
  onToggle: PropTypes.func,
  className: PropTypes.string,
};
