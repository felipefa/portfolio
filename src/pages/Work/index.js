import React, { useState } from 'react';
import {
  Button,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

import projects from '../../data/projects';

import { Card, DialogImage, DialogTech, ProjectsContainer } from './styles';

const ProjectCard = (project, handleOpenDialog) => (
  <Card key={project.title} onClick={() => handleOpenDialog(project)}>
    <CardContent>
      <CardMedia
        image={project.image}
        style={{
          height: 150,
          margin: '-1rem -1rem 0',
          maxWidth: 300,
        }}
      />
      <h4>{project.title}</h4>
      <p
        style={{
          maxHeight: 60,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {project.description}
      </p>
    </CardContent>
  </Card>
);

const Work = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [project, setProject] = useState({});

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setProject({});
  };

  const handleOpenDialog = (projectOpened) => {
    setIsDialogOpen(true);
    setProject(projectOpened);
  };

  return (
    <>
      <ProjectsContainer>
        {projects.map((p) => ProjectCard(p, handleOpenDialog))}
      </ProjectsContainer>
      <Dialog maxWidth="md" onClose={handleCloseDialog} open={isDialogOpen}>
        <DialogTitle>{project.title}</DialogTitle>
        <DialogContent>
          <DialogImage alt={project.title} src={project.image} />
          <DialogContentText>{project.description}</DialogContentText>
          {project && project.tech && (
            <DialogTech>{project.tech.join(' • ')}</DialogTech>
          )}
        </DialogContent>
        <DialogActions>
          {project.github && (
            <Button>
              <a
                href={project.github}
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'none' }}
                target="_blank"
              >
                See source code
              </a>
            </Button>
          )}
          {project.link && (
            <Button>
              <a
                href={project.link}
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'none' }}
                target="_blank"
              >
                {project.isPdf ? 'Download PDF' : 'Visit project'}
              </a>
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Work;
