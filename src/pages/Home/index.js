import React from 'react';
import { useTheme } from '@material-ui/core';

import underConstructionSvg from '~/images/under-construction.svg';

import { Container, Headline, Image } from './styles';

const Home = () => {
  const theme = useTheme();

  return (
    <Container theme={theme}>
      <Headline color="primary" variant="h2">
        Portfolio under construction!
      </Headline>

      <Image alt="Site under construction" src={underConstructionSvg} />
    </Container>
  );
};

export default Home;
