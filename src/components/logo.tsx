import { twMerge } from 'tailwind-merge';

import { audiowide } from '@/shared/fonts';

export function Logo({
  className = '',
  href = '#home',
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={twMerge(
        'hover:scale-110 text-3xl sm:text-4xl xl:text-5xl transition-transform',
        audiowide.className,
        className
      )}
      href={href}
      {...props}
    >
      <h1>Felipe</h1>
    </a>
  );
}
