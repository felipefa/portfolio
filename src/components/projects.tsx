import { ProjectCard } from '@/components/projectCard';
import { projects } from '@/shared/data/projects';

export function Projects() {
  return (
    <section className="flex flex-col min-h-svh pt-24 pb-8 gap-8" id="projects">
      <h2 className="text-primary-500 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display text-center">
        Projects
      </h2>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-8 max-w-6xl w-full mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.key} project={project} />
        ))}
      </div>
    </section>
  );
}
