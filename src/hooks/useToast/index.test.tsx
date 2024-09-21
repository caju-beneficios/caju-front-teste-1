import { render, screen, fireEvent, act } from '@testing-library/react';

import { ToastProvider, useToast } from './index';

jest.mock('~/components/Toaster', () => ({ onClose, text }: any) => (
  <div data-testid="toaster">
    <span>{text}</span>
    <button onClick={onClose} data-testid="close-button">
      Close
    </button>
  </div>
));

const MockComponent = () => {
  const { addToaster } = useToast();

  return (
    <button
      onClick={() =>
        addToaster({ text: 'Toast message', variant: 'success' })
      }
    >
      Add Toast
    </button>
  );
};

describe('ToastProvider', () => {
  jest.useFakeTimers();

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('should render children and provide context values', () => {
    render(
      <ToastProvider>
        <MockComponent />
      </ToastProvider>
    );

    expect(screen.getByRole('button', { name: /add toast/i })).toBeInTheDocument();
  });

  it('should add a toaster and render it correctly', () => {
    render(
      <ToastProvider>
        <MockComponent />
      </ToastProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: /add toast/i }));

    expect(screen.getByTestId('toaster')).toBeInTheDocument();
    expect(screen.getByText('Toast message')).toBeInTheDocument();
  });

  it('should automatically remove the toaster after the dismiss time', () => {
    render(
      <ToastProvider dismissTime={5000}>
        <MockComponent />
      </ToastProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: /add toast/i }));

    expect(screen.getByTestId('toaster')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(screen.queryByTestId('toaster')).not.toBeInTheDocument();
  });

  it('should close the toaster when the close button is clicked', () => {
    render(
      <ToastProvider>
        <MockComponent />
      </ToastProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: /add toast/i }));

    const closeButton = screen.getByTestId('close-button');
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);

    expect(screen.queryByTestId('toaster')).not.toBeInTheDocument();
  });
});
