import { audiowide } from '@/shared/fonts';

export function Logo({
  className = '',
  href = '#home',
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`${audiowide.className} hover:scale-110 text-3xl sm:text-4xl xl:text-5xl transition-transform ${className}`}
      href={href}
      {...props}
    >
      <h1>Felipe</h1>
    </a>
  );
}
