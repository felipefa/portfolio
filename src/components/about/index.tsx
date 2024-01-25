import { Navbar } from '@/components/navbar';

export function About() {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-between"
      id="about"
    >
      <Navbar />
      <p className="absolute text-[#45254B] font-display text-9xl top-80 -rotate-90">
        About
      </p>
    </section>
  );
}
