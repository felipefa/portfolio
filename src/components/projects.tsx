import { projects } from '@/shared/data/projects';

export function Projects() {
  return (
    <section className="flex flex-col min-h-svh pt-24 pb-8 gap-8" id="projects">
      <h2 className="text-primary-500 text-7xl md:text-8xl font-display text-center">
        Projects
      </h2>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-8 max-w-6xl w-full mx-auto">
        {projects.map((project) => (
          <div
            className="bg-purple-900/75 flex flex-col gap-4 p-8 rounded-xl hover:ring-2 hover:ring-primary-500 hover:shadow-2xl hover:shadow-primary-500/20 transition-all cursor-pointer"
            key={project.key}
          >
            <h3 className="font-display">{project.title}</h3>
            <div className="flex flex-1 items-start justify-start gap-2">
              {project.tech.slice(0, 3).map((tech) => (
                <p
                  className="text-sm font-medium p-1 rounded-full border border-primary-500"
                  key={tech}
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
