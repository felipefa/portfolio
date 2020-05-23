import React from 'react';
import { Link, Typography, useTheme } from '@material-ui/core';

import {
  Background,
  Body,
  Headline,
  Image,
  ImageBlur,
  ImageContainer,
  LeftPanel,
  RightPanel,
} from './styles';

const Home = () => {
  const theme = useTheme();

  return (
    <Background theme={theme}>
      <Body>
        <LeftPanel>
          <Headline color="primary" variant="h2">
            Meet your problem solver!
          </Headline>
          <div>
            <Typography variant="body1">
              In need of a Full Stack Web Developer who knows his way around
              Node.js, React and MongoDB?
            </Typography>
            <br />
            <Typography variant="body1">
              <Link href="/about">Click here</Link>
              {` and get to know me better, maybe we can even work together!`}
            </Typography>
          </div>
        </LeftPanel>
        <RightPanel>
          <ImageContainer>
            <ImageBlur
              src="https://avatars0.githubusercontent.com/u/12715851"
              alt="Felipe Araujo"
            />
            <Image
              src="https://avatars0.githubusercontent.com/u/12715851"
              alt="Felipe Araujo"
            />
          </ImageContainer>
        </RightPanel>
      </Body>
    </Background>
  );
};

export default Home;
