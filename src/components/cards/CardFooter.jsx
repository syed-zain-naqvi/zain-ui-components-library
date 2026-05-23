import React from 'react';
import PropTypes from 'prop-types';

export const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750 flex justify-end gap-3 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
