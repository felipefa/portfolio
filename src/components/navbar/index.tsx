import { Logo } from '@/components/logo';
import { MenuItem } from '@/components/menuItem';

export function Navbar({ hideLogo = false }) {
  return (
    <nav className="flex">
      {hideLogo ? null : <Logo />}
      <div className="flex flex-1 justify-center pt-12">
        <MenuItem href="#about">About</MenuItem>
        <MenuItem href="#projects">Projects</MenuItem>
        <MenuItem href="https://www.linkedin.com/in/felipe-araujo77">
          LinkedIn
        </MenuItem>
        <MenuItem href="https://github.com/felipefa">GitHub</MenuItem>
        <MenuItem href="mailto:devaraujofelipe@gmail.com">E-mail</MenuItem>
      </div>
    </nav>
  );
}
