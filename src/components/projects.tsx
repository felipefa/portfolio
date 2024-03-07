import { Suspense } from 'react';

import { ProjectCard } from '@/components/projectCard';
import { SectionTitle } from '@/components/sectionTitle';
import { projects } from '@/shared/data/projects';

export function Projects() {
  return (
    <section className="flex flex-col gap-8 pt-24 pb-8 min-h-svh" id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid flex-1 w-full max-w-6xl grid-cols-1 gap-8 px-8 mx-auto md:grid-cols-2 xl:grid-cols-3">
        {Object.values(projects).map((project) => (
          <Suspense fallback={<p>Loading...</p>} key={project.key}>
            <ProjectCard project={project} />
          </Suspense>
        ))}
      </div>
    </section>
  );
}
