import React from 'react';
import { render } from '@testing-library/react';
import WeatherIcon from './WeatherIcon';

test('renders the WeatherIcon', () => {
  const { asFragment } = render(
    <WeatherIcon  weather="sunny"/>
  );
  expect(asFragment()).toMatchSnapshot();
});
