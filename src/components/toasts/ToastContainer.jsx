import React from 'react';
import { cn } from '../../utils/cn';
import { Toast } from './Toast';

const positionClasses = {
  'top-left': 'top-4 left-4 items-start',
  'top-center': 'top-4 left-1/2 -translate-x-1/2 items-center',
  'top-right': 'top-4 right-4 items-end',
  'bottom-left': 'bottom-4 left-4 items-start',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2 items-center',
  'bottom-right': 'bottom-4 right-4 items-end',
};

export function ToastContainer({
  toasts = [],
  position = 'top-right',
  onDismiss,
  className,
}) {
  return (
    <div
      aria-live="polite"
      aria-atomic="false"
      className={cn(
        'fixed z-[9999] flex flex-col gap-2 pointer-events-none',
        positionClasses[position],
        className
      )}
    >
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto w-full">
          <Toast
            {...toast}
            onDismiss={onDismiss}
          />
        </div>
      ))}
    </div>
  );
}

ToastContainer.displayName = 'ToastContainer';
