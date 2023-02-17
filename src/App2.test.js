import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import App2 from './App2';

test('renders Subscribe and follow sarjit link', () => {
  render(<App2 />);
  const linkElement = screen.getByText(/Subscribe and follow sarjit/i);
  expect(linkElement).toBeInTheDocument();
});

