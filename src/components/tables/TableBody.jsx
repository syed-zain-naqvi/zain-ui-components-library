import React from 'react';
import PropTypes from 'prop-types';

export const TableBody = ({ children, className = '', ...props }) => {
  return (
    <tbody className={className} {...props}>
      {children}
    </tbody>
  );
};

TableBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
