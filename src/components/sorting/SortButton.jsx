import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownDivider } from '../dropdowns';
import { Button } from '../buttons';

export const SortButton = ({
  label = 'Sort',
  options = [],
  onSort = null,
  icon = '↕️',
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSort = (option) => {
    if (onSort) {
      onSort(option.value, option.order);
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
        {options.map((option, idx) => (
          <React.Fragment key={option.value}>
            {idx > 0 && option.divider && <DropdownDivider />}
            <DropdownItem onClick={() => handleSort(option)}>
              {option.label} {option.order === 'asc' ? '↑' : '↓'}
            </DropdownItem>
          </React.Fragment>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

SortButton.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      order: PropTypes.oneOf(['asc', 'desc']),
      divider: PropTypes.bool,
    })
  ),
  onSort: PropTypes.func,
  icon: PropTypes.node,
  className: PropTypes.string,
};
