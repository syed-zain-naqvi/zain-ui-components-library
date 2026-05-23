import React from 'react';
import PropTypes from 'prop-types';

export const TableCell = ({
  children,
  align = 'left',
  variant = 'default',
  isHeader = false,
  width = 'auto',
  className = '',
  ...props
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const variantClasses = {
    default: 'px-4 py-3',
    compact: 'px-2 py-2',
    spacious: 'px-6 py-4',
  };

  const baseClasses = `${alignClasses[align]} ${variantClasses[variant]}`;

  const Tag = isHeader ? 'th' : 'td';

  return (
    <Tag
      className={`${baseClasses} ${isHeader ? 'font-semibold text-gray-900 dark:text-gray-100' : 'text-gray-700 dark:text-gray-300'} ${className}`}
      style={{ width }}
      {...props}
    >
      {children}
    </Tag>
  );
};

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  variant: PropTypes.oneOf(['default', 'compact', 'spacious']),
  isHeader: PropTypes.bool,
  width: PropTypes.string,
  className: PropTypes.string,
};
