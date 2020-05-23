import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import DefaultLayout from '~/pages/_layouts/default';

const RouteWrapper = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <DefaultLayout>
        <Component {...props} />
      </DefaultLayout>
    )}
  />
);

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

export default RouteWrapper;
