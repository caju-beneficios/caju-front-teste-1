import { render, screen, fireEvent } from '@testing-library/react';

import TextField from './index';
import { theme } from "~/styles";

describe('TextField Component', () => {
  it('should render the input with label', () => {
    render(<TextField label="Username" id="username" />);

    const label = screen.getByLabelText(/username/i);
    const input = screen.getByRole('textbox');

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'username');
  });

  it('should render with error message', () => {
    render(<TextField label="Email" error="Invalid email" />);

    const errorMessage = screen.getByText(/invalid email/i);
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveStyle({ color: 'red', fontSize: '12px' });
  });

  it('should call onChange handler when typing', () => {
    const handleChange = jest.fn();
    render(<TextField onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Hello' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('Hello');
  });

  it('should render with default styles', () => {
    render(<TextField />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveStyle(`
      padding: 0 8px;
      background-color: #ffffff;
      border: 1px solid rgba(36, 28, 21, 0.3);
      font-size: 16px;
      line-height: 18px;
      border-radius: ${theme.border.radius.md};
    `);
  });
});
