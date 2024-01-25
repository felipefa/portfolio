import { otomanopeeOne } from '@/shared/styles/fonts';

export function Logo() {
  return (
    <a href="#home">
      <h1
        className={`${otomanopeeOne.className} hover:scale-125 px-10 py-8 text-5xl transition-transform `}
      >
        Felipe
      </h1>
    </a>
  );
}
