import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import laptopImage from '../../images/laptop-bg.png';

export const Container = styled.div`
  ${({ theme }) => `
    background-image: url(${laptopImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: calc(100vh - ${theme.mixins.toolbar.minHeight}px);
    justify-content: center;
    padding: ${theme.spacing(2)}px;
    text-align: left;
  `}
`;

export const Headline = styled(Typography)`
  font-size: clamp(56px, 8vw, 256px);
  font-weight: bold;
  text-shadow: 0 0 1.5px rgba(66, 66, 66, 0.98),
    0 0 7.5px rgba(66, 66, 66, 0.42), 0 0 3px rgba(20, 255, 236, 0.58),
    0 0 5.5px rgba(20, 255, 236, 0.84);
`;

export const Text = styled(Typography)`
  font-size: clamp(16px, 2.5vw, 128px);
  margin: 2rem auto;
`;
