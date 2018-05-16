import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';

import { MuiThemeProvider } from 'material-ui/styles';
import theme from '../themes/default';

const TemplateWrapper = ({ children }) => (
  <div>
    <MuiThemeProvider theme={theme}>
      <Helmet title="OR13" />
      <Navbar />
      <div>{children()}</div>
    </MuiThemeProvider>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
