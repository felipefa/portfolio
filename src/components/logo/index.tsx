import { audiowide } from '@/shared/fonts';

export function Logo() {
  return (
    <a
      className={`${audiowide.className} absolute hover:scale-125 mx-10 my-8 text-5xl transition-transform`}
      href="#home"
    >
      <h1>Felipe</h1>
    </a>
  );
}
