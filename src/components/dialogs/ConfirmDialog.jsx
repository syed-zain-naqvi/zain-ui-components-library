import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../modals';
import { Button } from '../buttons';

export const ConfirmDialog = ({
  isOpen = false,
  title = 'Confirm',
  message = 'Are you sure?',
  onConfirm = null,
  onCancel = null,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  type = 'default',
  ...props
}) => {
  const typeColors = {
    default: 'primary',
    danger: 'danger',
    warning: 'warning',
    success: 'success',
  };

  return (
    <Modal isOpen={isOpen} onClose={onCancel} {...props}>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>
        <p className="text-gray-700 dark:text-gray-300">{message}</p>
      </ModalBody>
      <ModalFooter>
        <Button variant="secondary" onClick={onCancel}>
          {cancelText}
        </Button>
        <Button variant={typeColors[type]} onClick={onConfirm}>
          {confirmText}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

ConfirmDialog.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  type: PropTypes.oneOf(['default', 'danger', 'warning', 'success']),
};
