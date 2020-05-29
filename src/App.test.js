import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getAllByText } = render(<App />);
  const homeElement = getAllByText(/Home/i);
  expect(homeElement[0]).toBeInTheDocument();
});
