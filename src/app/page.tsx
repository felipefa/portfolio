import { About } from '@/components/about';
import { Home } from '@/components/home';
import { Navbar } from '@/components/navbar';

export default function Main() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
    </main>
  );
}
