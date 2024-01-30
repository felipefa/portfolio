import {
  EnvelopeSimple,
  Folders,
  GithubLogo,
  LinkedinLogo,
  User,
} from '@phosphor-icons/react';
import { HTMLAttributes } from 'react';

import { MenuItem } from '@/components/menuItem';

export function MenuOptions({
  closeMenu,
  ...props
}: HTMLAttributes<HTMLDivElement> & { closeMenu?: () => void }) {
  return (
    <div {...props}>
      <MenuItem href="#about" onClick={closeMenu}>
        <User />
        About
      </MenuItem>
      <MenuItem href="#projects" onClick={closeMenu}>
        <Folders />
        Projects
      </MenuItem>
      <MenuItem
        href="https://www.linkedin.com/in/felipe-araujo77"
        onClick={closeMenu}
        rel="noopener noreferrer"
        target="_blank"
      >
        <LinkedinLogo />
        LinkedIn
      </MenuItem>
      <MenuItem
        href="https://github.com/felipefa"
        onClick={closeMenu}
        rel="noopener noreferrer"
        target="_blank"
      >
        <GithubLogo />
        GitHub
      </MenuItem>
      <MenuItem href="mailto:devaraujofelipe@gmail.com" onClick={closeMenu}>
        <EnvelopeSimple />
        E-mail
      </MenuItem>
    </div>
  );
}
