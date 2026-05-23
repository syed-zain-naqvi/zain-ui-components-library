import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({
  children,
  defaultIndex = 0,
  onChange = null,
  variant = 'default',
  orientation = 'horizontal',
  className = '',
  ...props
}) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  const handleTabChange = useCallback(
    (newIndex) => {
      setSelectedIndex(newIndex);
      if (onChange) {
        onChange(newIndex);
      }
    },
    [onChange]
  );

  return (
    <div
      className={`w-full ${orientation === 'vertical' ? 'flex gap-6' : ''} ${className}`}
      {...props}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          selectedIndex,
          onTabChange: handleTabChange,
          variant,
          orientation,
        })
      )}
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  defaultIndex: PropTypes.number,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'pills', 'underline']),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  className: PropTypes.string,
};
