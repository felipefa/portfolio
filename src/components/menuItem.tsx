import { AnchorHTMLAttributes } from 'react';

export function MenuItem({
  children,
  className = '',
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`${className} flex hover:scale-110 pt-4 mx-12 text-xl transition-transform uppercase`}
      {...props}
    >
      {children}
    </a>
  );
}
