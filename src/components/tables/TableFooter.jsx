import React from 'react';
import PropTypes from 'prop-types';

export const TableFooter = ({ children, className = '', ...props }) => {
  return (
    <tfoot
      className={`bg-gray-50 dark:bg-gray-750 border-t-2 border-gray-300 dark:border-gray-600 ${className}`}
      {...props}
    >
      {children}
    </tfoot>
  );
};

TableFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
