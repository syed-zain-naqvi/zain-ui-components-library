import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const TableHead = ({
  children,
  sortable = false,
  sortDirection = null,
  onSort = null,
  align = 'left',
  className = '',
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const handleClick = () => {
    if (sortable && onSort) {
      const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      onSort(newDirection);
    }
  };

  const sortIcon = {
    asc: '↑',
    desc: '↓',
    null: '⇅',
  };

  return (
    <th
      className={`${alignClasses[align]} px-4 py-3 font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 ${
        sortable ? 'cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors' : ''
      } ${className}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div className="flex items-center justify-between gap-2">
        <span>{children}</span>
        {sortable && (
          <span
            className={`text-xs font-normal transition-opacity ${
              isHovered || sortDirection ? 'opacity-100' : 'opacity-40'
            }`}
          >
            {sortIcon[sortDirection] || sortIcon.null}
          </span>
        )}
      </div>
    </th>
  );
};

TableHead.propTypes = {
  children: PropTypes.node.isRequired,
  sortable: PropTypes.bool,
  sortDirection: PropTypes.oneOf(['asc', 'desc', null]),
  onSort: PropTypes.func,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.string,
};
