import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export const Modal = ({
  isOpen,
  onClose,
  children,
  size = 'md',
  isCentered = true,
  closeOnEsc = true,
  closeOnOverlayClick = true,
  scrollBehavior = 'inside',
  className = '',
  overlayClassName = '',
  motionPreset = 'slideInCenter',
}) => {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      document.body.style.overflow = 'hidden';

      const handleEscKey = (event) => {
        if (closeOnEsc && event.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscKey);

      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements && focusableElements.length > 0) {
        focusableElements[0].focus();
      }

      return () => {
        document.removeEventListener('keydown', handleEscKey);
        document.body.style.overflow = 'unset';
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [isOpen, closeOnEsc, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    full: 'max-w-full mx-4',
  };

  const motionClasses = {
    slideInCenter: 'animate-slideIn',
    slideInLeft: 'animate-slideInLeft',
    slideInRight: 'animate-slideInRight',
    scaleIn: 'animate-scaleIn',
    fadeIn: 'animate-fadeIn',
  };

  const handleOverlayClick = (event) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <div
      className={`fixed inset-0 z-40 flex ${isCentered ? 'items-center justify-center' : 'items-start justify-center pt-20'} bg-black/50 backdrop-blur-sm transition-all duration-300 ${overlayClassName}`}
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div
        ref={modalRef}
        className={`
          relative w-full ${sizeClasses[size]} 
          bg-white dark:bg-slate-800
          rounded-lg shadow-2xl
          max-h-[90vh] overflow-hidden
          ${motionClasses[motionPreset]}
          ${className}
        `}
        role="dialog"
        aria-modal="true"
      >
        <div
          className={`
            h-full
            ${scrollBehavior === 'inside' ? 'overflow-y-auto' : 'overflow-hidden flex flex-col'}
          `}
        >
          {children}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};