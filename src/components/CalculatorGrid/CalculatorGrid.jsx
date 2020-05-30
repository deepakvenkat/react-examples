import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import CalculatorButton from '../CalculatorButton';
import ResultArea from '../ResultArea';

const styles = {
  root: {},
};
const layout = []
const CalculatorGrid = () => (
  <Grid>
    <ResultArea />
  </Grid>
)

CalculatorGrid.propTypes = {
  classes: PropTypes.shape({}).isRequired,
}
export default withStyles(styles)(CalculatorGrid);
