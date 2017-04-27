import React from 'react';
import PropTypes from 'prop-types';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

const Template = props => (
  <ThemeProvider uiTheme={uiTheme}>
    {props.children}
  </ThemeProvider>
);

Template.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default Template;
