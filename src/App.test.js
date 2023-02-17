import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import App from './App';


test('more info button', () => {
  render(<App />);
  const linkElement = screen.getByTestId("moreinfobutton");
  expect(linkElement).toBeInTheDocument();
});

// test('if title changes after button clicked ', async () => {
//   render(<App />);
//   const buttonElement = screen.getByRole("button");
//   await userEvent.click(buttonElement);
//   // screen.debug()
//   const linkElement = screen.getByText("Duplicate")
//   expect(linkElement).toBeInTheDocument();
// });

// test('to check the second text', () => {
//   render(<App />);
//   const linkElement = screen.getByTestId("item2");
//   expect(linkElement).toBeInTheDocument("name2")
//   screen.debug();
// });