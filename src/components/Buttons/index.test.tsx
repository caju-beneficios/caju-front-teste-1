
import { render, screen, fireEvent } from '@testing-library/react';

import Button from "./index";

describe('Button Component', () => {
  it('should render the button with correct text', () => {
    render(<Button>Click Me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
  });

  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click Me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should have the correct styles', () => {
    render(<Button>Styled Button</Button>);

    const button = screen.getByRole('button', { name: /styled button/i });
    expect(button).toHaveStyle({
      'background-color': '#64a98c',
      'color': '#fff',
      'border-radius': '36px',
    });
  });
});
