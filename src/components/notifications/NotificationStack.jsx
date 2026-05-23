import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from './Notification';

export const NotificationStack = ({
  notifications = [],
  position = 'top-right',
  onClose = null,
  maxNotifications = 5,
  ...props
}) => {
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };

  const visibleNotifications = notifications.slice(0, maxNotifications);

  return (
    <div
      className={`fixed ${positionClasses[position]} space-y-3 z-50 max-w-sm pointer-events-none`}
      {...props}
    >
      {visibleNotifications.map((notification) => (
        <div key={notification.id} className="pointer-events-auto">
          <Notification
            {...notification}
            onClose={onClose}
          />
        </div>
      ))}
    </div>
  );
};

NotificationStack.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
      duration: PropTypes.number,
    })
  ),
  position: PropTypes.oneOf([
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
  ]),
  onClose: PropTypes.func,
  maxNotifications: PropTypes.number,
};
