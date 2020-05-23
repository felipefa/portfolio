import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const MenuTypography = styled(Typography)`
  &:hover {
    animation: neon 0.7s ease-in-out infinite alternate;
  }

  @keyframes neon {
    from {
      opacity: 0.7;
      text-shadow: 0 0 6px rgba(66, 66, 66, 0.92),
        0 0 30px rgba(66, 66, 66, 0.34), 0 0 12px rgba(20, 255, 236, 0.52),
        0 0 21px rgba(20, 255, 236, 0.92), 0 0 34px rgba(20, 255, 236, 0.78),
        0 0 54px rgba(20, 255, 236, 0.92);
    }
    to {
      opacity: 1;
      text-shadow: 0 0 6px rgba(66, 66, 66, 0.98),
        0 0 30px rgba(66, 66, 66, 0.42), 0 0 12px rgba(20, 255, 236, 0.58),
        0 0 22px rgba(20, 255, 236, 0.84), 0 0 38px rgba(20, 255, 236, 0.88),
        0 0 60px rgba(20, 255, 236, 1);
    }
  }
`;
