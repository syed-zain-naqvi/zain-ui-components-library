import React from 'react';
import PropTypes from 'prop-types';

export const Breadcrumb = ({
  children,
  separator = '/',
  maxItems = null,
  className = '',
  ...props
}) => {
  let childrenArray = React.Children.toArray(children);

  // Collapse items if maxItems is set
  if (maxItems && childrenArray.length > maxItems) {
    const itemsToShow = maxItems - 1;
    const itemsToHide = childrenArray.length - itemsToShow;

    childrenArray = [
      ...childrenArray.slice(0, 1),
      <BreadcrumbItem key="collapsed" disabled>
        ···
      </BreadcrumbItem>,
      ...childrenArray.slice(-itemsToShow + 1),
    ];
  }

  return (
    <nav
      className={`flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 ${className}`}
      aria-label="Breadcrumb"
      {...props}
    >
      <ol className="flex items-center gap-2">
        {childrenArray.map((child, idx) => (
          <li key={idx} className="flex items-center gap-2">
            {child}
            {idx < childrenArray.length - 1 && (
              <span className="text-gray-500 dark:text-gray-400 mx-1">{separator}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired,
  separator: PropTypes.node,
  maxItems: PropTypes.number,
  className: PropTypes.string,
};
