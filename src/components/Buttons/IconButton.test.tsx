import { render, screen, fireEvent } from '@testing-library/react';
import { Fa500Px } from 'react-icons/fa';

import { IconButton } from './IconButton';

describe('IconButton Component', () => {
  it('should render the icon button with an icon', () => {
    render(
      <IconButton>
        <Fa500Px data-testid="fa-500px" />
      </IconButton>
    );

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(screen.getByTestId('fa-500px')).toBeInTheDocument();
  });

  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    render(
      <IconButton onClick={onClickMock}>
        <Fa500Px />
      </IconButton>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should apply correct styles to the button', () => {
    render(
      <IconButton>
        <Fa500Px />
      </IconButton>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveStyle({
      'border': '2px solid #64a98c',
      'background-color': 'transparent',
      'border-radius': '24px',
    });
  });
});
