import React from 'react';
import PropTypes from 'prop-types';

export const FilterChip = ({
  label,
  onRemove = null,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm ${className}`}
      {...props}
    >
      <span>{label}</span>
      {onRemove && (
        <button
          onClick={onRemove}
          className="hover:opacity-70 transition-opacity"
          aria-label={`Remove filter: ${label}`}
        >
          ✕
        </button>
      )}
    </div>
  );
};

FilterChip.propTypes = {
  label: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
  className: PropTypes.string,
};
