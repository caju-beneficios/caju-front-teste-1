import { render, screen, fireEvent } from '@testing-library/react';

import Toaster from './index';
import { theme } from "~/styles"

describe('Toaster Component', () => {
  it('should render the toaster with the correct text', () => {
    render(<Toaster text="This is a success message" variant="success" />);

    const toaster = screen.getByTestId('toaster-container');
    const textElement = screen.getByText(/this is a success message/i);

    expect(toaster).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

  it('should render with the correct variant styles', () => {
    render(<Toaster text="Warning message" variant="danger" />);

    const toaster = screen.getByTestId('toaster-container');

    expect(toaster).toHaveStyle(`border-left: 8px solid ${theme.colors['red-400']}`);
  });

  it('should call onClose when the close button is clicked', () => {
    const onCloseMock = jest.fn();
    render(
      <Toaster text="Closable message" variant="info" onClose={onCloseMock} />,
    );

    const closeButton = screen.getByRole('button');

    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should not render the close button if onClose is not provided', () => {
    render(<Toaster text="No close button" variant="info" />);

    const closeButton = screen.queryByRole('button');

    expect(closeButton).not.toBeInTheDocument();
  });
});
