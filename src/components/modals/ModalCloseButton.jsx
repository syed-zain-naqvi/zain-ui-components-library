import React from 'react';

export const ModalCloseButton = ({
  onClick,
  className = '',
  ariaLabel = 'Close modal',
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        inline-flex items-center justify-center
        w-8 h-8 rounded-md
        text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200
        hover:bg-slate-100 dark:hover:bg-slate-700
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800
        ${className}
      `}
      type="button"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};