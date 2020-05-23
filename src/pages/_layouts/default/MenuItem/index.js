import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@material-ui/core';

import { MenuTypography } from './styles';

const MenuItem = ({ children, color, href, variant }) => (
  <MenuTypography color={color} variant={variant}>
    <Link href={href} underline="none">
      {children}
    </Link>
  </MenuTypography>
);

MenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  color: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.string,
};

MenuItem.defaultProps = {
  color: 'primary',
  href: '/',
  variant: 'h5',
};

export default MenuItem;
