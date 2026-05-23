import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

export const Accordion = ({
  children,
  allowMultiple = false,
  defaultIndex = 0,
  onChange = null,
  className = '',
  ...props
}) => {
  const [expandedItems, setExpandedItems] = useState(
    allowMultiple ? [] : [defaultIndex]
  );

  const handleToggle = useCallback(
    (index) => {
      setExpandedItems((prev) => {
        let newItems;

        if (allowMultiple) {
          newItems = prev.includes(index)
            ? prev.filter((i) => i !== index)
            : [...prev, index];
        } else {
          newItems = prev.includes(index) ? [] : [index];
        }

        if (onChange) {
          onChange(newItems);
        }

        return newItems;
      });
    },
    [allowMultiple, onChange]
  );

  return (
    <div
      className={`border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden ${className}`}
      role="region"
      {...props}
    >
      {React.Children.map(children, (child, idx) =>
        React.cloneElement(child, {
          itemIndex: idx,
          isExpanded: expandedItems.includes(idx),
          onToggle: handleToggle,
        })
      )}
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  allowMultiple: PropTypes.bool,
  defaultIndex: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
};
