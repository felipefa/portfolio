import { About } from '@/components/about';
import { Home } from '@/components/home';

export default function Main() {
  return (
    <main className="overflow-x-hidden">
      <Home />
      <About />
    </main>
  );
}
