import React from 'react';
import { render } from '@testing-library/react';
import WeatherCard from './WeatherCard';

test('renders the WeatherCard', () => {
  const { asFragment } = render(
    <WeatherCard
      weather="sunny"
      day="Wed"
      high="77"
      low="63"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
