import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

export const SearchInput = ({
  placeholder = 'Search...',
  onSearch = null,
  onClear = null,
  debounceDelay = 300,
  clearable = true,
  icon = '🔍',
  className = '',
  ...props
}) => {
  const [value, setValue] = useState('');
  const [debounceTimer, setDebounceTimer] = useState(null);

  const handleChange = useCallback(
    (e) => {
      const newValue = e.target.value;
      setValue(newValue);

      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }

      const timer = setTimeout(() => {
        if (onSearch) {
          onSearch(newValue);
        }
      }, debounceDelay);

      setDebounceTimer(timer);
    },
    [debounceDelay, onSearch, debounceTimer]
  );

  const handleClear = useCallback(() => {
    setValue('');
    if (onClear) {
      onClear();
    }
    if (onSearch) {
      onSearch('');
    }
  }, [onClear, onSearch]);

  useEffect(() => {
    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
    };
  }, [debounceTimer]);

  return (
    <div className={`relative flex items-center ${className}`}>
      <span className="absolute left-3 text-lg pointer-events-none">{icon}</span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
      {clearable && value && (
        <button
          onClick={handleClear}
          className="absolute right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
  onClear: PropTypes.func,
  debounceDelay: PropTypes.number,
  clearable: PropTypes.bool,
  icon: PropTypes.node,
  className: PropTypes.string,
};
