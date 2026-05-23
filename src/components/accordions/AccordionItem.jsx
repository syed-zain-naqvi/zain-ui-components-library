import React from 'react';
import PropTypes from 'prop-types';

export const AccordionItem = ({
  children,
  itemIndex = 0,
  isExpanded = false,
  onToggle = null,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`border-b border-gray-200 dark:border-gray-700 last:border-b-0 ${className}`}
      {...props}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          itemIndex,
          isExpanded,
          onToggle,
        })
      )}
    </div>
  );
};

AccordionItem.propTypes = {
  children: PropTypes.node.isRequired,
  itemIndex: PropTypes.number,
  isExpanded: PropTypes.bool,
  onToggle: PropTypes.func,
  className: PropTypes.string,
};
