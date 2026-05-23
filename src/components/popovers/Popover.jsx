import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

export const Popover = ({
  children,
  isOpen = false,
  onOpenChange,
  placement = 'bottom',
  closeOnBlur = true,
  closeOnEsc = true,
  trigger = 'click',
}) => {
  const [internalOpen, setInternalOpen] = useState(isOpen);
  const triggerRef = useRef(null);
  const contentRef = useRef(null);
  const isControlled = onOpenChange !== undefined;
  const open = isControlled ? isOpen : internalOpen;

  const handleOpenChange = (newState) => {
    if (isControlled) {
      onOpenChange(newState);
    } else {
      setInternalOpen(newState);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        closeOnBlur &&
        triggerRef.current &&
        contentRef.current &&
        !triggerRef.current.contains(event.target) &&
        !contentRef.current.contains(event.target)
      ) {
        handleOpenChange(false);
      }
    };

    const handleEsc = (event) => {
      if (closeOnEsc && event.key === 'Escape') {
        handleOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEsc);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEsc);
      };
    }
  }, [open, closeOnBlur, closeOnEsc]);

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

    return placements[placement] || placements.bottom;
  };

  const childrenArray = React.Children.toArray(children);
  const triggerChild = childrenArray.find((child) => child.type?.displayName === 'PopoverTrigger');
  const contentChild = childrenArray.find((child) => child.type?.displayName === 'PopoverContent');

  const triggerElement = triggerChild &&
    React.cloneElement(triggerChild, {
      ref: triggerRef,
      onClick: () => {
        if (trigger === 'click') {
          handleOpenChange(!open);
        }
      },
      onMouseEnter: () => {
        if (trigger === 'hover') {
          handleOpenChange(true);
        }
      },
      onMouseLeave: () => {
        if (trigger === 'hover') {
          handleOpenChange(false);
        }
      },
    });

  const contentElement =
    open &&
    contentChild &&
    ReactDOM.createPortal(
      React.cloneElement(contentChild, {
        ref: contentRef,
        style: getPlacementStyles(),
        onMouseEnter: () => {
          if (trigger === 'hover') {
            handleOpenChange(true);
          }
        },
        onMouseLeave: () => {
          if (trigger === 'hover') {
            handleOpenChange(false);
          }
        },
      }),
      document.body
    );

  return (
    <>
      {triggerElement}
      {contentElement}
    </>
  );
};