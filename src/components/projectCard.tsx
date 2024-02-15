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

  return (
    <div className="bg-purple-900/75 flex flex-col gap-4 p-6 rounded-xl hover:ring-2 hover:ring-primary-500 hover:shadow-2xl hover:shadow-primary-500/20 transition-all cursor-pointer">
      <div className="flex flex-col items-baseline">
        <h3 className="font-display">{project.title}</h3>
        <p className="font-bold text-xs text-primary-500/50">
          {project.date.getFullYear()}
        </p>
      </div>
      <div className="flex flex-1 items-start justify-start gap-2 flex-wrap">
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
