import React from 'react';
import { render } from '@testing-library/react';
import WeatherGrid from './WeatherGrid';

test('renders the WeatherGrid', () => {
  const days = [{
    weather: 'sunny',
    day: 'Sat',
    low: '65',
    high: '72',
  }, {
    weather: 'cloudy',
    day: 'Sun',
    low: '60',
    high: '68'
  }, {
    weather: 'overcast',
    day: 'Mon',
    low: '62',
    high: '70'
  }];
  const { asFragment } = render(
    <WeatherGrid days={days} />
  );
  expect(asFragment()).toMatchSnapshot();
});
