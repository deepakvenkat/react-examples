import React from 'react';
import { render } from '@testing-library/react';
import CalculatorGrid, { CalculatorRow } from './CalculatorGrid';

test('renders the CalculatorGrid', () => {
  const { asFragment } = render(
    <CalculatorGrid />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders the CalculatorRow', () => {
  const { asFragment } = render(
    <CalculatorRow
      row={[1, 2, 3, '.']}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
