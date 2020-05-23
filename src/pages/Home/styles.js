import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import laptop_bg from '~/images/laptop-bg.png';

export const Background = styled.div`
  ${({ theme }) => `
    background-image: url(${laptop_bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    padding: ${theme.spacing(2)}px;
  `}
`;

export const Body = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: space-between;
`;

export const LeftPanel = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  order: 1;
`;

export const Headline = styled(Typography)`
  font-weight: bold;
  line-height: 3.5rem;
  text-shadow: 0 0 1.5px rgba(66, 66, 66, 0.98),
    0 0 7.5px rgba(66, 66, 66, 0.42), 0 0 3px rgba(20, 255, 236, 0.58),
    0 0 5.5px rgba(20, 255, 236, 0.84);
`;

export const RightPanel = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  max-width: 400px;
  order: 1;
`;

export const ImageContainer = styled.div`
  height: 300px;
  width: 300px;
  position: relative;
`;

const image = ({ src }) => `
  background-image: url(${src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const ImageBlur = styled.img`
  ${image}
  filter: blur(20px);
`;

export const Image = styled.img`
  ${image}
`;
