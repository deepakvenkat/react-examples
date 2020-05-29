import React from 'react';
import { render } from '@testing-library/react';
import CalculatorButton from './CalculatorButton';

test('renders the calculatorbutton with type: number', () => {
  const { asFragment } = render(
    <CalculatorButton
      type="number"
      text="1"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});


test('renders the calculatorbutton with type: operator', () => {
  const { asFragment } = render(
    <CalculatorButton
      type="operator"
      text="1"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
