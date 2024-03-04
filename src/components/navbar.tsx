'use client';

import { IconContext, List, X } from '@phosphor-icons/react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { Logo } from '@/components/logo';
import { MenuOptions } from '@/components/menuOptions';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = React.useCallback(() => setIsMenuOpen(false), []);
  const openMenu = React.useCallback(() => setIsMenuOpen(true), []);

  return (
    <IconContext.Provider
      value={{
        className: 'mr-2 mt-0.5',
        color: '#31ddd3',
        size: 20,
        weight: 'bold',
      }}
    >
      <nav
        className={twMerge(
          'sticky top-0 z-50 transition-colors bg-gradient-to-b from-purple-950 to-100%',
          isMenuOpen ? 'bg-purple-950' : ''
        )}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex flex-1">
            <Logo onClick={isMenuOpen ? closeMenu : undefined} />
          </div>
          <button
            className="text-xl uppercase"
            onClick={isMenuOpen ? closeMenu : openMenu}
          >
            <span
              className={twMerge('xl:hidden', isMenuOpen ? 'hidden' : 'flex')}
            >
              <List className="mt-1 mr-2" />
              Menu
            </span>
            <span
              className={twMerge('xl:hidden', isMenuOpen ? 'flex' : 'hidden')}
            >
              <X className="mt-1 mr-2" />
              Close
            </span>
          </button>
          <MenuOptions className="justify-center hidden xl:flex" />
        </div>
        <MenuOptions
          className={twMerge(
            'items-center justify-center pb-4 border-primary-500/15 border-b-2 mb-8',
            isMenuOpen ? 'flex flex-col' : 'hidden'
          )}
          closeMenu={closeMenu}
        />
      </nav>
    </IconContext.Provider>
  );
}
