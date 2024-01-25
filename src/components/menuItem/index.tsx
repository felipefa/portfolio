import { AnchorHTMLAttributes } from 'react';

export function MenuItem({
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`${className} opacity-80 hover:opacity-100 hover:scale-110 mx-12 text-xl transition-all uppercase`}
      {...props}
    >
      {children}
    </a>
  );
}
