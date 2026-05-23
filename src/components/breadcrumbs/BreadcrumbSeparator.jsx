import React from 'react';
import PropTypes from 'prop-types';

export const BreadcrumbSeparator = ({ children = '/', className = '', ...props }) => {
  return (
    <span
      className={`text-gray-500 dark:text-gray-400 mx-1 select-none ${className}`}
      aria-hidden="true"
      {...props}
    >
      {children}
    </span>
  );
};

BreadcrumbSeparator.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
