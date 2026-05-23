import React from 'react';
import PropTypes from 'prop-types';

export const TabPanels = ({
  children,
  selectedIndex = 0,
  className = '',
  ...props
}) => {
  return (
    <div className={`w-full ${className}`} {...props}>
      {React.Children.map(children, (child, idx) =>
        React.cloneElement(child, {
          tabIndex: idx,
          isActive: idx === selectedIndex,
        })
      )}
    </div>
  );
};

TabPanels.propTypes = {
  children: PropTypes.node.isRequired,
  selectedIndex: PropTypes.number,
  className: PropTypes.string,
};
