import { About } from '@/components/about';
import { Home } from '@/components/home';
import { Navbar } from '@/components/navbar';
import { Projects } from '@/components/projects';

export default function Main() {
  return (
    <main className="animate-opacity">
      <Navbar />
      <Home />
      <About />
      <Projects />
    </main>
  );
}
