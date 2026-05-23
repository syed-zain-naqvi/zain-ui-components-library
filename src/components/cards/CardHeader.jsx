import React from 'react';
import PropTypes from 'prop-types';

export const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
