import React from 'react';
import { render } from '@testing-library/react';
import CalculatorGrid from './CalculatorGrid';

test('renders the resultarea', () => {
  const { asFragment } = render(
    <CalculatorGrid />
  );
  expect(asFragment()).toMatchSnapshot();
});
