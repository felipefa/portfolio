import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Link,
  Icon,
  IconButton,
  SvgIcon,
  useTheme,
} from '@material-ui/core';

import { Wrapper, CustomToolbar, MenuTypography, Menus } from './styles';

export default function DefaultLayout({ children }) {
  const theme = useTheme();
  const background = theme.palette.background.default;
  const color = theme.palette.text.primary;
  const paddingTop = theme.mixins.toolbar.minHeight + theme.spacing(1);
  const toolbarBackground = theme.palette.background.paper;

  return (
    <Wrapper>
      <AppBar>
        <CustomToolbar background={toolbarBackground}>
          <MenuTypography color="primary" variant="h1">
            <Link href="/" underline="none">
              FLP
            </Link>
          </MenuTypography>
          <Menus>
            <MenuTypography color="primary" variant="h5">
              <Link href="/about" underline="none">
                About
              </Link>
            </MenuTypography>
            <MenuTypography color="primary" variant="h5">
              <Link href="/work" underline="none">
                Work
              </Link>
            </MenuTypography>
            <MenuTypography color="primary" variant="h5">
              <Link href="mailto:devaraujofelipe@gmail.com" underline="none">
                <IconButton color="inherit" aria-label="email">
                  <Icon>mail_outline</Icon>
                </IconButton>
              </Link>
            </MenuTypography>
            <MenuTypography color="primary" variant="h5">
              <Link href="https://github.com/felipefa" underline="none">
                <IconButton color="inherit" aria-label="github">
                  <SvgIcon>
                    <path
                      fill="currentColor"
                      d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                    />
                  </SvgIcon>
                </IconButton>
              </Link>
            </MenuTypography>
            <MenuTypography color="primary" variant="h5">
              <Link
                href="https://www.linkedin.com/in/felipe-araujo77/"
                underline="none"
              >
                <IconButton color="inherit" aria-label="linkedin">
                  <SvgIcon>
                    <path
                      fill="currentColor"
                      d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
                    />
                  </SvgIcon>
                </IconButton>
              </Link>
            </MenuTypography>
          </Menus>
        </CustomToolbar>
      </AppBar>
      <div style={{ background, color, height: '100vh', paddingTop }}>
        {children}
      </div>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
