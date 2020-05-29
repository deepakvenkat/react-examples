import React from 'react';
import { render } from '@testing-library/react';
import ResultArea from './ResultArea';

test('renders the resultarea', () => {
  const { asFragment } = render(
    <ResultArea />
  );
  expect(asFragment()).toMatchSnapshot();
});
