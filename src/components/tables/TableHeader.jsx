import React from 'react';
import PropTypes from 'prop-types';

export const TableHeader = ({ children, className = '', ...props }) => {
  return (
    <thead
      className={`bg-gray-100 dark:bg-gray-800 border-b-2 border-gray-300 dark:border-gray-600 ${className}`}
      {...props}
    >
      {children}
    </thead>
  );
};

TableHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
