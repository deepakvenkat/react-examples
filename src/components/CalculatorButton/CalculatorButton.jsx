import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    height: '75px',
    width: '75px',
    borderRadius: 0,
    borderColor: 'red',
    border: 'solid 0.5px',
    fontSize: '28px',
    backgroundColor: (props) => ( props.type === 'number' ? 'white' : 'pink'),
    '&$hover': {
      backgroundColor: (props) => ( props.type === 'number' ? 'white' : 'pink'),
    },
  },
}

const CalculatorButton = ({
  classes,
  text,
}) => (
  <Button
    variant="contained"
    disableElevation
    className={classes.root}
  >
    {text}
  </Button>
);

CalculatorButton.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  // TODO: if type is number, it should also have a value
  type: PropTypes.oneOf(['number', 'operator']).isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles)(CalculatorButton);
