'use client';

import { IconContext, List, X } from '@phosphor-icons/react';
import React from 'react';

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
        className={`sticky top-0 z-50 transition-colors bg-gradient-to-b from-purple-950 to-100% ${
          isMenuOpen ? 'bg-purple-950' : ''
        }`}
      >
        <div className="flex items-center justify-between py-4 px-6">
          <div className="flex flex-1">
            <Logo onClick={isMenuOpen ? closeMenu : undefined} />
          </div>
          <button
            className="text-xl uppercase"
            onClick={isMenuOpen ? closeMenu : openMenu}
          >
            <span className={`${isMenuOpen ? 'hidden' : 'flex'} xl:hidden`}>
              <List className="mr-2 mt-1" />
              Menu
            </span>
            <span className={`${isMenuOpen ? 'flex' : 'hidden'} xl:hidden`}>
              <X className="mr-2 mt-1" />
              Close
            </span>
          </button>
          <MenuOptions className="hidden xl:flex justify-center" />
        </div>
        <MenuOptions
          className={`${
            isMenuOpen ? 'flex flex-col' : 'hidden'
          } items-center justify-center pb-4 border-primary-500/15 border-b-2 mb-8`}
          closeMenu={closeMenu}
        />
      </nav>
    </IconContext.Provider>
  );
}
