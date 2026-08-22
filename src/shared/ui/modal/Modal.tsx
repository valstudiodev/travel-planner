import React, { useEffect } from 'react';
import './modal.scss'

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

function Modal({
  children,
  isOpen,
  onClose,
  className = ''
}: ModalProps): React.JSX.Element | null {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`modal ${className}`.trim()}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="modal__overflow">
        <div
          className="modal__content"
          onClick={(event) => event.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;