import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('increases count when button is clicked', () => {
  const { getByText } = render(<App />);
  const button = getByText(/Увеличить счетчик/i);
  const count = getByText(/Счетчик:/i);

  expect(count).toHaveTextContent('0');
  fireEvent.click(button);
  expect(count).toHaveTextContent('1');
});
