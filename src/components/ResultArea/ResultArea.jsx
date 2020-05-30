import React from 'react';
import { InputBase } from '@material-ui/core';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    height: '75px',
    width: '300px',
    '& .MuiInputBase-input': {
      '& .MuiInput-root-before': {
        height: 0,
      },
      height: '75px',
      width: '300px',
      borderRadius: 0,
      borderColor: 'red',
      border: 'solid 0.5px',
      padding: 0,
      fontSize: '32px',
      color: 'white',
      backgroundColor: '#420a12',
      textAlign: 'right',
      lineHeight: '32px',
    },
  },
};

const ResultArea = ({ classes, ...rest }) => (
  <InputBase
    classes={classes}
    {...rest}
  />
);

ResultArea.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(ResultArea);
