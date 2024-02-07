import { projects } from '@/shared/data/projects';

export function Projects() {
  return (
    <section className="relative min-h-svh h-svh pb-8" id="projects">
      <h2 className="absolute text-primary-500/15 text-7xl md:text-8xl font-display -z-10 text-center w-full xl:top-1/3">
        Projects
      </h2>
      <div className="h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-20 px-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div
            className="bg-slate-800 bg-opacity-80 flex flex-col p-8 rounded-xl"
            key={project.key}
          >
            <h3 className="font-display">{project.title}</h3>
            <div className="flex flex-1 flex-col justify-center">
              {project.tech.slice(0, 3).map((tech) => (
                <p key={tech}>{tech}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
