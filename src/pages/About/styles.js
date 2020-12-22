import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const AboutMeContainer = styled.div`
  margin-left: 5vw;
  width: 50%;

  @media (max-width: 800px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const Container = styled.div`
  ${({ theme }) => `
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    padding: 2rem;

    @media (max-width: 800px) {
      align-items: flex-start;
      flex-direction: column;
    }

    @media (min-width: 800px) {
      height: calc(100vh - ${theme.mixins.toolbar.minHeight}px);
    }
  `}
`;

export const Image = styled.img`
  border-radius: 50%;
  height: auto;
  max-height: 30vh;
  max-width: 30vw;
  width: auto;

  @media (max-width: 800px) {
    display: block;
    max-height: 150px;
    max-width: 150px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Text = styled(Typography)`
  font-size: clamp(1.25rem, 2vw, 4.5rem);
  margin: 2rem auto;

  @media (max-width: 800px) {
    &:first-child {
      margin-top: 0;
    }
  }
`;
