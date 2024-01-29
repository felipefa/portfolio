import Image from 'next/image';

import { Navbar } from '@/components/navbar';
import { audiowide } from '@/shared/fonts';
import KoelnImage from '@/shared/images/köln.png';

import './styles.css';

export function Home() {
  return (
    <section className="flex min-h-screen flex-col justify-between" id="home">
      <Navbar />
      <div className="flex flex-1 flex-col xl:flex-row xl:w-4xl xl:mx-32">
        <div className="flex flex-1 flex-col items-center justify-center px-4 text-center mt-8 xl:mt-0">
          <h1
            className={`${audiowide.className} text-6xl md:text-7xl lg:text-8xl whitespace-pre-line`}
          >
            {`Welcome\nto my\n`}
            <span className="portfolio transition-all">portfolio!</span>
          </h1>
          <h2 className="mt-4 lg:mt-8 text-lg md:text-xl lg:text-2xl text-shadow whitespace-pre-line">
            Hi, I’m Felipe and I love building innovative software!
          </h2>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Image
            alt="3D isometric version of cyberpunk Köln"
            className="hover:scale-110 transition-transform"
            height={600}
            priority
            src={KoelnImage}
            title="A small fraction of my world"
            width={700}
          />
        </div>
      </div>
    </section>
  );
}
