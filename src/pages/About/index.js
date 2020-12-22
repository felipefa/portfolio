import React from 'react';
import { useTheme } from '@material-ui/core';

import felipeImage from '../../images/felipe.jpeg';

import { AboutMeContainer, Container, Image, Text } from './styles';

const myAge = new Date().getFullYear() - 1996;

const About = () => {
  const theme = useTheme();

  return (
    <Container theme={theme}>
      <div>
        <Image alt="Felipe Araujo" height="300" width="300" src={felipeImage} />
        <Text>Felipe Araujo, {myAge}</Text>
        <Text>Based in Brazil</Text>
      </div>
      <AboutMeContainer>
        <Text>
          I&apos;m a developer with an innovative mentality and ambition to make
          the world a better place.
        </Text>
        <Text>
          Always living in search of new knowledge, especially in the area of
          technology, where I&apos;m in love with what I do.
        </Text>
        <Text>
          Self-taught, collaborative and focused are just some of my main
          features.
        </Text>
      </AboutMeContainer>
    </Container>
  );
};

export default About;
