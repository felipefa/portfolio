import { audiowide } from '@/shared/fonts';

export function Logo() {
  return (
    <a
      className={`${audiowide.className} hover:scale-125 text-5xl transition-transform`}
      href="#home"
    >
      <h1>Felipe</h1>
    </a>
  );
}
