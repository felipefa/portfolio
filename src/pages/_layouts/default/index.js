import React from 'react';
import PropTypes from 'prop-types';

export default function DefaultLayout({ children }) {
  return (
    <div style={{ background: '#212121', height: '100%' }}>{children}</div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
