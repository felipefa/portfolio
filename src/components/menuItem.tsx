import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type MenuItemProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export function MenuItem({
  children,
  className = '',
  ...props
}: MenuItemProps) {
  return (
    <Link
      className={twMerge(
        'flex hover:scale-110 pt-4 mx-12 text-xl transition-transform uppercase',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
