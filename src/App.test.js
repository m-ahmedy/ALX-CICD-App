import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a welcome element', () => {
  render(<App />);
  const element = screen.getByText(/Welcome to the CI\/CD App/i);
  expect(element).toBeInTheDocument();
});
