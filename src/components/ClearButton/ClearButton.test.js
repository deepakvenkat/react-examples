import React from 'react';
import { render } from '@testing-library/react';
import ClearButton from './ClearButton';

test('renders the clearbutton', () => {
  const { asFragment } = render(
    <ClearButton />
  );
  expect(asFragment()).toMatchSnapshot();
});
