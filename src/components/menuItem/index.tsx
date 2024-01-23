import { AnchorHTMLAttributes } from 'react';

export function MenuItem({
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`${className} opacity-80 hover:opacity-100 px-12 text-xl transition-opacity uppercase`}
      {...props}
    >
      {children}
    </a>
  );
}
