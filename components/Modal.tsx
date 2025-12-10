/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, ReactNode, MouseEvent, KeyboardEvent } from "react";
import { IoCloseOutline } from "react-icons/io5";

// Type definitions
type ModalSize = "sm" | "md" | "lg" | "xl" | "xxl" | "full";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: ModalSize;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

// Modal Component
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
}) => {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      // Type assertion for addEventListener
      document.addEventListener("keydown", handleEscape as any);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscape as any);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, closeOnEscape]);

  if (!isOpen) return null;

  // Size classes with proper typing
  const sizeClasses: Record<ModalSize, string> = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    xxl: "max-w-6xl",
    full: "max-w-full mx-4",
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#000000a3] bg-opacity-50 transition-opacity"
        onClick={handleOverlayClick}
      />

      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className={`relative w-full ${sizeClasses[size]} transform rounded-lg bg-[#00162D] py-4 min-h-20 shadow-xl transition-all`}
          onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              {title && (
                <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
              )}
            </div>
          )}
          {showCloseButton && (
            <button
              onClick={onClose}
              className="rounded-md p-2 z-50 absolute top-3 right-3 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close modal"
            >
              <IoCloseOutline size={"20"} />
            </button>
          )}

          {/* Content */}
          <div className="px-6 py-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// Usage example with TypeScript
/*
import Modal from './Modal';

const ExampleComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Example Modal"
        size="lg"
        showCloseButton={true}
        closeOnOverlayClick={true}
        closeOnEscape={true}
      >
        <p>This is the modal content</p>
      </Modal>
    </div>
  );
};
*/
