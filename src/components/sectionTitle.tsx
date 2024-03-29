import React from 'react';
import { twMerge } from 'tailwind-merge';

export function SectionTitle({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) {
  return (
    <h2
      className={twMerge(
        'font-display text-center text-primary-500 text-5xl md:text-6xl lg:text-7xl xl:text-8xl',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
