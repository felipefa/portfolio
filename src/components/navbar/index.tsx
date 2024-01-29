'use client';

import React, { HTMLAttributes } from 'react';

import { Logo } from '@/components/logo';
import { MenuItem } from '@/components/menuItem';

function MenuOptions(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <MenuItem href="#about">About</MenuItem>
      <MenuItem href="#projects">Projects</MenuItem>
      <MenuItem href="https://www.linkedin.com/in/felipe-araujo77">
        LinkedIn
      </MenuItem>
      <MenuItem href="https://github.com/felipefa">GitHub</MenuItem>
      <MenuItem href="mailto:devaraujofelipe@gmail.com">E-mail</MenuItem>
    </div>
  );
}

export function Navbar() {
  const [isMenuOpen, toggleIsMenuOpen] = React.useReducer(
    (state) => !state,
    false
  );

  return (
    <>
      <div className="sticky top-0 flex items-center justify-between py-4 px-6">
        <div className="flex flex-1">
          <Logo />
        </div>
        <button className="" onClick={toggleIsMenuOpen}>
          <span className={`${isMenuOpen ? 'hidden' : 'block'} xl:hidden`}>
            Open menu
          </span>
          <span className={`${isMenuOpen ? 'block' : 'hidden'} xl:hidden`}>
            Close menu
          </span>
        </button>
        <MenuOptions className={`hidden xl:flex justify-center`} />
      </div>
      <MenuOptions
        className={`${
          isMenuOpen ? 'flex flex-col' : 'hidden'
        } items-center justify-center`}
      />
    </>
  );
}
