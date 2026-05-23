import React from 'react';
import PropTypes from 'prop-types';

export const AccordionPanel = ({
  children,
  itemIndex = 0,
  isExpanded = false,
  className = '',
  ...props
}) => {
  return (
    <div
      role="region"
      hidden={!isExpanded}
      className={`overflow-hidden transition-all duration-300 ${
        isExpanded ? 'max-h-screen' : 'max-h-0'
      }`}
      {...props}
    >
      <div
        className={`px-6 py-4 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-750 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

AccordionPanel.propTypes = {
  children: PropTypes.node.isRequired,
  itemIndex: PropTypes.number,
  isExpanded: PropTypes.bool,
  className: PropTypes.string,
};
