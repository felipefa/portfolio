import { About } from '@/components/about';
import { Home } from '@/components/home';
import { Navbar } from '@/components/navbar';
import { Projects } from '@/components/projects';

export default function Main() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </main>
  );
}
