import React from 'react';
import PropTypes from 'prop-types';

export const TableRow = ({
  children,
  isHeader = false,
  isFooter = false,
  className = '',
  ...props
}) => {
  const baseClasses = `border-b border-gray-200 dark:border-gray-700 transition-colors`;

  return isHeader || isFooter ? (
    <tr className={`${baseClasses} bg-gray-50 dark:bg-gray-750 ${className}`} {...props}>
      {children}
    </tr>
  ) : (
    <tr className={`${baseClasses} ${className}`} {...props}>
      {children}
    </tr>
  );
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  isHeader: PropTypes.bool,
  isFooter: PropTypes.bool,
  className: PropTypes.string,
};
