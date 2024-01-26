import Image from 'next/image';

import { Navbar } from '@/components/navbar';
import KoelnImage from '@/shared/images/köln.png';

export function Home() {
  return (
    <section className="flex min-h-screen flex-col justify-between" id="home">
      <Navbar />
      <div className="flex flex-1 flex-col lg:flex-row mx-auto lg:mx-80">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="text-4xl lg:text-8xl">
            Welcome<br></br>to my<br></br>portfolio
          </h1>
          <h2 className="mt-4 lg:mt-8 text-lg lg:text-3xl">
            Hi, I’m Felipe and I love<br></br>building innovative software!
          </h2>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Image
            alt="3D isometric version of cyberpunk Köln"
            height={450}
            priority
            src={KoelnImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            width={512}
          />
        </div>
      </div>
    </section>
  );
}
