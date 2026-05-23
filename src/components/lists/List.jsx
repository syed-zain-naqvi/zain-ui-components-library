import React from 'react';
import PropTypes from 'prop-types';

export const List = ({
  children,
  variant = 'default',
  spacing = 'md',
  ordered = false,
  className = '',
  ...props
}) => {
  const spacingClasses = {
    sm: 'gap-1',
    md: 'gap-2',
    lg: 'gap-4',
  };

  const variantClasses = {
    default: 'list-none',
    disc: 'list-disc pl-6',
    decimal: 'list-decimal pl-6',
  };

  const Tag = ordered ? 'ol' : 'ul';

  return (
    <Tag
      className={`flex flex-col ${spacingClasses[spacing]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'disc', 'decimal']),
  spacing: PropTypes.oneOf(['sm', 'md', 'lg']),
  ordered: PropTypes.bool,
  className: PropTypes.string,
};
