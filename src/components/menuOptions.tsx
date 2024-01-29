import {
  EnvelopeSimple,
  Folders,
  GithubLogo,
  LinkedinLogo,
  User,
} from '@phosphor-icons/react';
import { HTMLAttributes } from 'react';

import { MenuItem } from '@/components/menuItem';

export function MenuOptions(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <MenuItem href="#about">
        <User />
        About
      </MenuItem>
      <MenuItem href="#projects">
        <Folders />
        Projects
      </MenuItem>
      <MenuItem href="https://www.linkedin.com/in/felipe-araujo77">
        <LinkedinLogo />
        LinkedIn
      </MenuItem>
      <MenuItem href="https://github.com/felipefa">
        <GithubLogo />
        GitHub
      </MenuItem>
      <MenuItem href="mailto:devaraujofelipe@gmail.com">
        <EnvelopeSimple />
        E-mail
      </MenuItem>
    </div>
  );
}
