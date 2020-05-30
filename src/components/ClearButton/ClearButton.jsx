import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import CalculatorButton from '../CalculatorButton';

const styles = {
  root: {
    width: '225px',
    backgroundColor: 'white',
    '& .MuiButton-label': {
      textTransform: 'lowercase',
    }
  },
}

const ClearButton = ({
  classes,
}) => (
  <CalculatorButton
    type="operator"
    text="clear"
    classes={classes}
  />
);

ClearButton.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(ClearButton);
