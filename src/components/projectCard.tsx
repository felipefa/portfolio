'use client';

import React from 'react';

import { Project } from '@/shared/data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [showAllTechs, setShowAllTechs] = React.useState(false);

  const hasMoreThan3Techs = project.tech.length > 3;

  const filteredTechs = React.useMemo(() => {
    if (project.tech.length <= 3 || showAllTechs) return project.tech;

    return project.tech.slice(0, 2);
  }, [showAllTechs, project.tech]);

  function handleShowAllTechs() {
    setShowAllTechs(true);
  }

  React.useEffect(() => {
    const checkWindowSize = () => {
      setShowAllTechs(window.innerWidth < 768);
    };

    checkWindowSize();

    window.addEventListener('resize', checkWindowSize);

    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  return (
    <div className="flex flex-col gap-5 p-6 transition-all cursor-pointer bg-purple-900/50 rounded-xl hover:ring-2 hover:ring-primary-500 hover:shadow-2xl hover:shadow-primary-500/20">
      <div className="flex flex-col">
        <time
          className="text-primary-500/90"
          dateTime={project.date.getFullYear().toString()}
        >
          {project.date.getFullYear()}
        </time>
        <h3 className="text-xl font-display line-clamp-1">{project.title}</h3>
      </div>
      <p className="w-full mb-1 text-lg font-medium tracking-wide text-primary-500/90 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap items-start justify-start gap-2">
        {filteredTechs.map((tech) => (
          <p
            className="text-sm font-medium min-w-fit py-1 px-1.5 rounded-full border border-primary-500 transition-colors hover:bg-primary-500 hover:text-purple-900"
            key={tech}
          >
            {tech}
          </p>
        ))}
        {hasMoreThan3Techs && !showAllTechs && (
          <button
            className="text-sm font-medium min-w-fit py-1 px-1.5 rounded-full border border-primary-500 transition-colors hover:bg-primary-500 hover:text-purple-900"
            onClick={handleShowAllTechs}
          >
            More...
          </button>
        )}
      </div>
    </div>
  );
}
