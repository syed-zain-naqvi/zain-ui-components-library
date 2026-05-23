import React from 'react';
import PropTypes from 'prop-types';

export const TabPanel = ({
  children,
  tabIndex = 0,
  isActive = false,
  className = '',
  ...props
}) => {
  return (
    <div
      role="tabpanel"
      aria-hidden={!isActive}
      hidden={!isActive}
      className={`transition-opacity duration-200 ${
        isActive ? 'opacity-100' : 'opacity-0 hidden'
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  tabIndex: PropTypes.number,
  isActive: PropTypes.bool,
  className: PropTypes.string,
};
