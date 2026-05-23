import React from 'react';
import PropTypes from 'prop-types';

export const ListItem = ({
  children,
  icon = null,
  className = '',
  ...props
}) => {
  return (
    <li
      className={`flex items-center gap-3 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${className}`}
      {...props}
    >
      {icon && <span className="text-lg flex-shrink-0">{icon}</span>}
      <span className="flex-1">{children}</span>
    </li>
  );
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  className: PropTypes.string,
};
