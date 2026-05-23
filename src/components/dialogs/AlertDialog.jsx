import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../modals';
import { Button } from '../buttons';

export const AlertDialog = ({
  isOpen = false,
  title = 'Alert',
  message = 'Important message',
  onClose = null,
  closeText = 'Okay',
  type = 'info',
  icon = null,
  ...props
}) => {
  const typeConfig = {
    info: {
      icon: 'ℹ️',
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
    },
    warning: {
      icon: '⚠️',
      color: 'text-yellow-600 dark:text-yellow-400',
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    },
    error: {
      icon: '❌',
      color: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-900/20',
    },
    success: {
      icon: '✓',
      color: 'text-green-600 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-900/20',
    },
  };

  const config = typeConfig[type];

  return (
    <Modal isOpen={isOpen} onClose={onClose} {...props}>
      <ModalHeader>
        <div className="flex items-center gap-2">
          <span className="text-2xl">{icon || config.icon}</span>
          {title}
        </div>
      </ModalHeader>
      <ModalBody>
        <div className={`p-4 rounded-lg ${config.bg}`}>
          <p className={`${config.color} font-medium`}>{message}</p>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button variant="primary" onClick={onClose}>
          {closeText}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

AlertDialog.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  closeText: PropTypes.string,
  type: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
  icon: PropTypes.node,
};
