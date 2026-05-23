import React from 'react';
import PropTypes from 'prop-types';
import { FilterChip } from './FilterChip';

export const FilterBar = ({
  activeFilters = {},
  onFilterChange = null,
  onClearAll = null,
  children = null,
  className = '',
  ...props
}) => {
  const filterCount = Object.values(activeFilters).filter(Boolean).length;

  return (
    <div className={`flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg ${className}`} {...props}>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Filters:
      </span>

      <div className="flex flex-wrap gap-2">
        {Object.entries(activeFilters).map(
          ([key, value]) =>
            value && (
              <FilterChip
                key={key}
                label={`${key}: ${value}`}
                onRemove={() => onFilterChange && onFilterChange(key, null)}
              />
            )
        )}
      </div>

      {filterCount > 0 && (
        <button
          onClick={onClearAll}
          className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          Clear All
        </button>
      )}

      {children}
    </div>
  );
};

FilterBar.propTypes = {
  activeFilters: PropTypes.object,
  onFilterChange: PropTypes.func,
  onClearAll: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};
