import React from 'react';
import { render } from '@testing-library/react';
import LocationForm from './LocationForm';

test('renders the LocationForm', () => {
  const { asFragment } = render(
    <LocationForm />
  );
  expect(asFragment()).toMatchSnapshot();
});
