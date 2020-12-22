import React from 'react';
import { Link, useTheme } from '@material-ui/core';

import { Container, Headline, Text } from './styles';

const Home = () => {
  const theme = useTheme();

  return (
    <Container theme={theme}>
      <Headline color="primary" variant="h2">
        Hello!
        <br />
        Nice to meet you.
      </Headline>
      <div>
        <Text>
          It&apos;s <Link href="/about">Felipe</Link> here, do you need a&nbsp;
          <strong>Full Stack Web Developer</strong>,
          <br />
          who knows his way around <strong>Node.js</strong> and&nbsp;
          <strong>React</strong>?
        </Text>
        <Text>
          Check out <Link href="/work">my projects</Link>, maybe we can work
          together!
        </Text>
      </div>
    </Container>
  );
};

export default Home;
