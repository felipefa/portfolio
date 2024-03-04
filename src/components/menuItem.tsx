import { AnchorHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export function MenuItem({
  children,
  className = '',
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={twMerge(
        'flex hover:scale-110 pt-4 mx-12 text-xl transition-transform uppercase',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
