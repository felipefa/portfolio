import Image from 'next/image';

import { SectionTitle } from '@/components/sectionTitle';
import KoelnImage from '@/shared/images/köln.png';

import './styles.css';

export function Home() {
  return (
    <section
      className="flex flex-col justify-center h-svh xl:justify-between xl:flex-row xl:w-4xl xl:mx-32"
      id="home"
    >
      <div className="flex flex-col items-center justify-center px-4 mt-8 text-center xl:flex-1 xl:mt-0">
        <SectionTitle className="whitespace-pre-line">
          {`Welcome\nto my\n`}
          <span className="transition-all portfolio">portfolio!</span>
        </SectionTitle>
        <h2
          className={
            'font-sans mt-4 lg:mt-8 text-lg md:text-xl lg:text-2xl text-shadow whitespace-pre-line'
          }
        >
          Hi, I’m Felipe and I love building innovative software!
        </h2>
      </div>
      <div className="flex items-center justify-center xl:flex-1">
        <Image
          alt="3D isometric version of cyberpunk Köln"
          className="transition-transform hover:scale-110"
          height={600}
          priority
          src={KoelnImage}
          title="A small fraction of my world"
          width={700}
        />
      </div>
    </section>
  );
}
