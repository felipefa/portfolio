import { AnchorHTMLAttributes } from 'react';

export function MenuItem({
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`${className} hover:opacity-100 hover:scale-110 pt-4 mx-12 text-xl transition-all uppercase`}
      {...props}
    >
      {children}
    </a>
  );
}
