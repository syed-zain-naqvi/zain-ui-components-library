import React from 'react';
import PropTypes from 'prop-types';

export const ListItemIcon = ({ children, className = '', ...props }) => {
  return (
    <span className={`flex items-center justify-center text-lg flex-shrink-0 ${className}`} {...props}>
      {children}
    </span>
  );
};

ListItemIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
