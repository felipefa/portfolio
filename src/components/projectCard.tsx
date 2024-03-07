'use client';

import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

import { Project } from '@/shared/data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [showAllTechs, setShowAllTechs] = React.useState(false);
  const [showProjectDetails, setShowProjectDetails] = React.useState(false);

  const hasMoreThan3Techs = project.tech.length > 3;

  const filteredTechs = React.useMemo(() => {
    if (project.tech.length <= 3 || showAllTechs) return project.tech;

    return project.tech.slice(0, 2);
  }, [showAllTechs, project.tech]);

  const handleShowProjectDetails = React.useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());

    params.set('project', project.key);

    const newParams = params.toString();
    const hash = window?.location.hash || '';

    router.push(`${pathname}?${newParams}${hash}`, { scroll: false });
  }, [pathname, project.key, router, searchParams]);

  function handleShowAllTechs() {
    setShowAllTechs(true);
  }

  function handleCloseProjectDetails() {
    const hash = window?.location.hash || '';

    router.push(`${pathname}?${hash}`, { scroll: false });

    setShowProjectDetails(false);
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

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchParams.get('project') === project.key) {
        setShowProjectDetails(true);
      }
    }, 250);

    return () => {
      clearTimeout(timeout);
    };
  }, [project.key, searchParams]);

  return (
    <AlertDialog.Root open={showProjectDetails}>
      <AlertDialog.Trigger asChild onClick={handleShowProjectDetails}>
        <div
          className={
            'flex flex-col gap-5 p-6 transition-all cursor-pointer bg-purple-900/50 rounded-xl hover:ring-2 hover:ring-primary-500 hover:shadow-2xl hover:shadow-primary-500/20'
          }
        >
          <div className="flex flex-col">
            <time
              className="text-primary-500/90"
              dateTime={project.date.getFullYear().toString()}
            >
              {project.date.getFullYear()}
            </time>
            <h3 className="text-xl font-display line-clamp-1">
              {project.title}
            </h3>
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
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          onClick={handleCloseProjectDetails}
          className="bg-black/85 data-[state=open]:animate-overlayShow fixed inset-0"
        />
        <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] xl:max-w-screen-lg translate-x-[-50%] translate-y-[-50%] bg-purple-900/85 rounded-xl ring-2 ring-primary-500 shadow-2xl shadow-primary-500/20 focus:outline-none space-y-8 p-6">
          <AlertDialog.Title className="text-xl font-display line-clamp-1">
            {project.title}
          </AlertDialog.Title>
          <AlertDialog.Description className="w-full text-lg font-medium tracking-wide text-primary-500/90">
            {project.description}
          </AlertDialog.Description>
          <div className="flex flex-wrap items-start justify-start gap-2">
            {project.tech.map((tech) => (
              <p
                className="text-sm font-medium min-w-fit py-1 px-1.5 rounded-full border border-primary-500 transition-colors"
                key={tech}
              >
                {tech}
              </p>
            ))}
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
