"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cookies } from 'next/headers';



interface DropdownItem {
  label: string;
  href?: string;
  action?: () => void;
}

interface DropdownMenuProps {
  buttonText?: string;
  items: DropdownItem[];
}

export default function DropdownMenu({ buttonText = "Options", items }: DropdownMenuProps) {
  // 1. Estado para controlar se o menu está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  // 2. Referência para o contêiner principal (usado para detectar cliques fora)
  const menuRef = useRef<HTMLDivElement>(null);

  // 3. Efeito para fechar o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Se o menu estiver aberto e o clique não ocorreu dentro da div do menu, feche-o
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative inline-block text-left">
      <div>
        <div className="flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 8C23.86 8 27 11.14 27 15C27 18.86 23.86 22 20 22C16.14 22 13 18.86 13 15C13 11.14 16.14 8 20 8ZM20 36C15.94 36 11.14 34.36 7.72 30.24C11.2236 27.4924 15.5475 25.9992 20 25.9992C24.4525 25.9992 28.7764 27.4924 32.28 30.24C28.86 34.36 24.06 36 20 36Z" fill="white"/>
          </svg>

        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex w-full"
        >
          {buttonText}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-out dark:bg-gray-800 dark:ring-white/10
          ${isOpen
            ? 'transform opacity-100 scale-100'
            : 'transform opacity-0 scale-95 pointer-events-none'
          }
        `}
      >
        <div className="py-1">
          {items.map((item, index) => (
            <div key={index}>
              {item.href ? (
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)} // Fecha o menu ao navegar
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={() => {
                    if (item.action) item.action();
                    setIsOpen(false); // Fecha o menu após a ação
                  }}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}