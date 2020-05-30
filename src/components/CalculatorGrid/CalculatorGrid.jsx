import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import CalculatorButton from '../CalculatorButton';
import ResultArea from '../ResultArea';
import ClearButton from '../ClearButton';

const styles = {
  root: {},
};

const CalculatorGrid = () => (
  <Grid>
    <ResultArea />
    <div>
      <ClearButton />
      <CalculatorButton
        type="operator"
        text="AC"
      />
    </div>
    <div>
      <CalculatorButton
        type="number"
        text="7"
      />
      <CalculatorButton
        type="number"
        text="8"
      />
      <CalculatorButton
        type="number"
        text="9"
      />
      <CalculatorButton
        type="operator"
        text="+"
      />
    </div>
    <div>
      <CalculatorButton
        type="number"
        text="4"
      />
      <CalculatorButton
        type="number"
        text="5"
      />
      <CalculatorButton
        type="number"
        text="6"
      />
      <CalculatorButton
        type="operator"
        text="-"
      />
    </div>
    <div>
      <CalculatorButton
        type="number"
        text="1"
      />
      <CalculatorButton
        type="number"
        text="2"
      />
      <CalculatorButton
        type="number"
        text="3"
      />
      <CalculatorButton
        type="operator"
        text="*"
      />
    </div>
    <div>
      <CalculatorButton
        type="number"
        text="0"
      />
      <CalculatorButton
        type="number"
        text="."
      />
      <CalculatorButton
        type="operator"
        text="="
      />
      <CalculatorButton
        type="operator"
        text="/"
      />
    </div>
  </Grid>
)

CalculatorGrid.propTypes = {
  classes: PropTypes.shape({}).isRequired,
}
export default withStyles(styles)(CalculatorGrid);
