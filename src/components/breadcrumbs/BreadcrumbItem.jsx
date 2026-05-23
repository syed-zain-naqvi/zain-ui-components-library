import React from 'react';
import PropTypes from 'prop-types';

export const BreadcrumbItem = ({
  children,
  href = null,
  disabled = false,
  isCurrentPage = false,
  className = '',
  ...props
}) => {
  const Tag = href ? 'a' : 'span';

  const baseClasses = `transition-colors ${
    disabled
      ? 'cursor-not-allowed opacity-50'
      : isCurrentPage
        ? 'text-gray-900 dark:text-white font-semibold'
        : 'hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer'
  }`;

  return (
    <Tag
      href={href}
      className={`${baseClasses} ${className}`}
      aria-current={isCurrentPage ? 'page' : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
};

BreadcrumbItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  isCurrentPage: PropTypes.bool,
  className: PropTypes.string,
};
