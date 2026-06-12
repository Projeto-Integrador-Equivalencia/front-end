//Componente sem utilização no momento 

/*'use client';

import { ReactNode, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
 
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm transition-opacity"
      onClick={onClose} 
    >
      <div
        
        className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
        onClick={(e) => e.stopPropagation()} 
      >
        {title && (
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {title}
            </h3>
            <button
              onClick={onClose}
              className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
              aria-label="Fechar modal"
            >
              
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        
        <div className="mt-2 text-sm text-gray-500">
          {children}
        </div>
      </div>
    </div>
  );
}*/