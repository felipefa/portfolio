import { Audiowide, Source_Sans_3 } from 'next/font/google';

const audiowide = Audiowide({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-audiowide',
  weight: '400'
});
const sourceSans = Source_Sans_3({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-source-sans'
});

export { audiowide, sourceSans };
