import React, { useState, useRef, useEffect } from 'react';

export const Dropdown = ({
  children,
  isOpen = false,
  onOpenChange,
  placement = 'bottom-start',
  offset = { x: 0, y: 4 },
  closeOnSelect = true,
  closeOnBlur = true,
}) => {
  const [internalOpen, setInternalOpen] = useState(isOpen);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
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
        menuRef.current &&
        !triggerRef.current.contains(event.target) &&
        !menuRef.current.contains(event.target)
      ) {
        handleOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [open, closeOnBlur]);

  const getPlacementClasses = () => {
    const placementMap = {
      'top-start': `bottom-full left-0 mb-${offset.y}`,
      'top-end': `bottom-full right-0 mb-${offset.y}`,
      'bottom-start': `top-full left-0 mt-${offset.y}`,
      'bottom-end': `top-full right-0 mt-${offset.y}`,
      'left-start': `right-full top-0 mr-${offset.x}`,
      'left-end': `right-full bottom-0 mr-${offset.x}`,
      'right-start': `left-full top-0 ml-${offset.x}`,
      'right-end': `left-full bottom-0 ml-${offset.x}`,
    };
    return placementMap[placement] || placementMap['bottom-start'];
  };

  const childrenArray = React.Children.toArray(children);
  const trigger = childrenArray.find((child) => child.type?.displayName === 'DropdownTrigger');
  const menu = childrenArray.find((child) => child.type?.displayName === 'DropdownMenu');

  return (
    <div className="relative inline-block">
      {trigger &&
        React.cloneElement(trigger, {
          ref: triggerRef,
          onClick: () => handleOpenChange(!open),
          'aria-expanded': open,
          'aria-haspopup': 'menu',
        })}

      {open &&
        menu &&
        React.cloneElement(menu, {
          ref: menuRef,
          onItemClick: () => {
            if (closeOnSelect) {
              handleOpenChange(false);
            }
          },
          className: `absolute ${getPlacementClasses()} z-50 ${menu.props.className || ''}`,
        })}
    </div>
  );
};