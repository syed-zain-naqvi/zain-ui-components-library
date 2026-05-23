import React from 'react';
import PropTypes from 'prop-types';

export const CardBody = ({ children, padding = 'md', className = '', ...props }) => {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div className={`${paddingClasses[padding]} ${className}`} {...props}>
      {children}
    </div>
  );
};

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  className: PropTypes.string,
};
