import React from 'react';

export const DropdownItem = ({
  children,
  onClick,
  onItemClick,
  icon,
  isDisabled = false,
  className = '',
}) => {
  const handleClick = () => {
    if (!isDisabled) {
      onClick?.();
      onItemClick?.();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`
        w-full text-left px-4 py-2
        text-slate-700 dark:text-slate-300
        hover:bg-slate-100 dark:hover:bg-slate-700
        transition-colors duration-150
        flex items-center gap-3
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        focus:outline-none focus:bg-slate-100 dark:focus:bg-slate-700
        ${className}
      `}
      role="menuitem"
      type="button"
    >
      {icon && <span className="w-5 h-5 flex items-center justify-center">{icon}</span>}
      <span className="flex-1">{children}</span>
    </button>
  );
};