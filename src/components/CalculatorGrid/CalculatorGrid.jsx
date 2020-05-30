import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import CalculatorButton from '../CalculatorButton';
import ResultArea from '../ResultArea';
import ClearButton from '../ClearButton';

import useResultValue from './hooks/useResultValue';

const styles = {
  root: {},
};

const buttonCbGenerator = (value, dispatch) => () => {
  dispatch({
    type: value,
  });
};

export const CalculatorRow = ({
  row,
  dispatch
}) => {
  const rowDom = row.map((element) => {
    const onClickFunction = buttonCbGenerator(element, dispatch);
    if (typeof element === 'string'){
      if (element === 'clear') {
        return <ClearButton onClick={onClickFunction} key="clear"/>;
      } else {
        return (
          <CalculatorButton
            type="operator"
            text={element}
            onClick={onClickFunction}
            key={element}
          />
        )
      }
    } else if (typeof element === 'number'){
      return (
        <CalculatorButton
          type="number"
          text={`${element}`}
          onClick={onClickFunction}
          key={element}
        />
      )
    } else {
      throw new Error('can\'t handle element');
    }
  });
  return rowDom;
};
const layout = [
  ['clear', 'AC'],
  [7, 8, 9, '+'],
  [4, 5, 6, '-'],
  [1, 2, 3, '*'],
  [0, '.', '=', '/'],
];

const CalculatorGrid = () => {
  const {
    result: resultValue,
    dispatch,
  } = useResultValue();
  return (
    <Grid>
    <ResultArea
      value={resultValue}
    />
    { layout.map((row) => (
      <div>
        <CalculatorRow
          row={row}
          key={row[0]}
          dispatch={dispatch}
        />
      </div>
    ))}
    </Grid>
  );
};

CalculatorGrid.propTypes = {
  classes: PropTypes.shape({}).isRequired,
}
export default withStyles(styles)(CalculatorGrid);
