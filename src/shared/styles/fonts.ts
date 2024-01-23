import { Josefin_Sans } from 'next/font/google';
import localFont from 'next/font/local';

const josefinSans = Josefin_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-josefin-sans'
});
const otomanopeeOne = localFont({
  src: '../fonts/OtomanopeeOne-Regular.ttf',
  variable: '--font-otomanopee-one'
});

export { josefinSans, otomanopeeOne };
