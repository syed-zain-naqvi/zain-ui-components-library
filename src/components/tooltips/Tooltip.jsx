import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

export const Tooltip = ({
  label,
  children,
  placement = 'top',
  delay = { open: 200, close: 0 },
  bg = 'bg-slate-900 dark:bg-slate-700',
  textColor = 'text-white',
  fontSize = 'text-xs',
  hasArrow = true,
  maxW = 'max-w-xs',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const timeoutRef = useRef(null);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay.open);
  };

  const hideTooltip = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, delay.close);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const getPlacementStyles = () => {
    if (!triggerRef.current) return {};

    const rect = triggerRef.current.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    const placements = {
      top: {
        top: scrollY + rect.top - 10 + 'px',
        left: scrollX + rect.left + rect.width / 2 + 'px',
        transform: 'translateX(-50%) translateY(-100%)',
      },
      bottom: {
        top: scrollY + rect.bottom + 10 + 'px',
        left: scrollX + rect.left + rect.width / 2 + 'px',
        transform: 'translateX(-50%)',
      },
      left: {
        top: scrollY + rect.top + rect.height / 2 + 'px',
        left: scrollX + rect.left - 10 + 'px',
        transform: 'translateY(-50%) translateX(-100%)',
      },
      right: {
        top: scrollY + rect.top + rect.height / 2 + 'px',
        left: scrollX + rect.right + 10 + 'px',
        transform: 'translateY(-50%)',
      },
    };

    return placements[placement] || placements.top;
  };

  const tooltipContent = isVisible &&
    ReactDOM.createPortal(
      <div
        ref={tooltipRef}
        className={`
          fixed z-50 ${maxW}
          ${bg} ${textColor} ${fontSize}
          px-2 py-1 rounded
          font-medium pointer-events-none
          whitespace-nowrap overflow-hidden text-ellipsis
          shadow-lg
        `}
        style={getPlacementStyles()}
        role="tooltip"
      >
        {label}
        {hasArrow && (
          <div
            className={`
              absolute w-1.5 h-1.5 ${bg} transform rotate-45
              ${
                placement === 'top'
                  ? 'top-full left-1/2 -translate-x-1/2 -mt-0.75'
                  : placement === 'bottom'
                    ? 'bottom-full left-1/2 -translate-x-1/2 -mb-0.75'
                    : placement === 'left'
                      ? 'left-full top-1/2 -translate-y-1/2 -ml-0.75'
                      : 'right-full top-1/2 -translate-y-1/2 -mr-0.75'
              }
            `}
          />
        )}
      </div>,
      document.body
    );

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        className="inline-block"
      >
        {children}
      </div>
      {tooltipContent}
    </>
  );
};