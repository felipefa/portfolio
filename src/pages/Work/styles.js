import styled from 'styled-components';
import { Card as MaterialCard, DialogContentText } from '@material-ui/core';

export const ProjectsContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  margin-top: 1.5rem;
`;

export const Card = styled(MaterialCard)`
  cursor: pointer;
  display: flex;
  flex: 1;
  margin: 0.5rem;
  max-height: 300px;
  max-width: 300px;
  min-height: 300px;
  min-width: 300px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  .MuiCardContent-root {
    flex: 1;
  }
`;

export const DialogImage = styled.img`
  border-radius: 4px;
  display: block;
  margin: auto auto 1rem;
  max-height: 50vh;
  max-width: 100%;
`;

export const DialogTech = styled(DialogContentText)`
  font-size: 0.8rem;
`;
