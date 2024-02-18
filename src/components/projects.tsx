import { ProjectCard } from '@/components/projectCard';
import { SectionTitle } from '@/components/sectionTitle';
import { projects } from '@/shared/data/projects';

export function Projects() {
  return (
    <section className="flex flex-col min-h-svh pt-24 pb-8 gap-8" id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-8 max-w-6xl w-full mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.key} project={project} />
        ))}
      </div>
    </section>
  );
}
