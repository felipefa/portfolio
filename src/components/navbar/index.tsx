import { MenuItem } from '@/components/menuItem';
import { otomanopeeOne } from '@/shared/styles/fonts';

export function Navbar() {
  return (
    <nav className="flex">
      <h1 className={`${otomanopeeOne.className} px-10 py-8 text-5xl`}>
        Felipe
      </h1>
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
