import { ArrowsOutSimple, Minus, X } from '@phosphor-icons/react/dist/ssr';

export function About() {
  return (
    <section
      className="flex flex-1 flex-col items-center justify-center min-h-svh h-svh"
      id="about"
    >
      <p className="xl:hidden text-[rgba(var(--foreground-rgb),0.15)] font-display text-7xl mb-8">
        About
      </p>
      <div className="border-[rgba(var(--foreground-rgb),0.15)] border-2 bg-[rgb(var(--background-rgb))] min-h-[50%] min-w-80 w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-w-[960px] rounded-2xl shadow-2xl shadow-[rgba(var(--foreground-rgb),0.15)] flex flex-col">
        <div className="border-[rgba(var(--foreground-rgb),0.15)] border-b-2 flex items-center px-4 py-2">
          <X className="mr-2" />
          <Minus className="mr-2" />
          <ArrowsOutSimple />
          <p className="text-center flex-1 text-lg">code</p>
        </div>
        <div className="flex flex-1 p-4">
          <p className="overflow-auto whitespace-pre-wrap text-lg text-[#F2E48A]">
            {`{\n\tmyName: "Felipe Araujo",\n\tmyExperience: "8+ years",\n\tmyMainSkills: ["React", "TypeScript", "Node.js", "React Native"],\n\tmyEducation: "Bachelor in Computer Science",\n\tmyCurrentLocation: "Cologne, Germany",\n\tlanguages: ["English", "Portuguese"]\n}`}
          </p>
        </div>
      </div>
    </section>
  );
}
