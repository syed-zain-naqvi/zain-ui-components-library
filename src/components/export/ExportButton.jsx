import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '../dropdowns';
import { Button } from '../buttons';
import { exportToCSV, exportToJSON } from './exportUtils';

export const ExportButton = ({
  label = 'Export',
  data = [],
  fileName = 'export',
  onExport = null,
  formats = ['csv', 'json'],
  icon = '💾',
  className = '',
  ...props
}) => {
  const handleExport = (format) => {
    if (format === 'csv') {
      exportToCSV(data, fileName);
    } else if (format === 'json') {
      exportToJSON(data, fileName);
    }

    if (onExport) {
      onExport(format);
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="secondary" className={className} {...props}>
          {icon} {label}
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        {formats.includes('csv') && (
          <DropdownItem onClick={() => handleExport('csv')}>
            Export as CSV
          </DropdownItem>
        )}
        {formats.includes('json') && (
          <DropdownItem onClick={() => handleExport('json')}>
            Export as JSON
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

ExportButton.propTypes = {
  label: PropTypes.string,
  data: PropTypes.array,
  fileName: PropTypes.string,
  onExport: PropTypes.func,
  formats: PropTypes.arrayOf(PropTypes.oneOf(['csv', 'json'])),
  icon: PropTypes.node,
  className: PropTypes.string,
};
