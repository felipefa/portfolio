import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const Container = styled.div`
  ${({ theme }) => `
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: ${theme.spacing(2)}px;
    text-align: center;
  `}
`;

export const Headline = styled(Typography)`
  font-size: 3rem;
  font-weight: bold;
  line-height: 3.5rem;
  text-shadow: 0 0 1.5px rgba(66, 66, 66, 0.98),
    0 0 7.5px rgba(66, 66, 66, 0.42), 0 0 3px rgba(20, 255, 236, 0.58),
    0 0 5.5px rgba(20, 255, 236, 0.84);

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

export const Image = styled.img`
  height: 50%;
  width: 50%;
  margin: 16px 0;

  @media (max-width: 768px) {
    height: 70%;
    width: 70%;
  }
`;
