import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '../dropdowns';
import { Button } from '../buttons';

export const FilterButton = ({
  label = 'Filter',
  options = [],
  onSelect = null,
  icon = '⚙️',
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    if (onSelect) {
      onSelect(option);
    }
    setIsOpen(false);
  };

  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="secondary" className={className} {...props}>
          {icon} {label}
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        {options.map((option) => (
          <DropdownItem
            key={option.value}
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

FilterButton.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  onSelect: PropTypes.func,
  icon: PropTypes.node,
  className: PropTypes.string,
};
