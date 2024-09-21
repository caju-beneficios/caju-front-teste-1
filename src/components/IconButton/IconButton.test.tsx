import { render, screen, fireEvent } from '@testing-library/react';
import { Fa500Px } from 'react-icons/fa';

import { IconButton } from '.';

describe('IconButton', () => {
  const mockedOnClick = jest.fn();

  beforeEach(() => {
    mockedOnClick.mockClear();
  });

  it('should render children', () => {
    render(
      <IconButton>
        <Fa500Px role="application" />
      </IconButton>,
    );

    expect(screen.getByRole('application')).toBeTruthy();
  });

  it('should be disabled', () => {
    render(
      <IconButton disabled>
        <Fa500Px />
      </IconButton>,
    );

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should call onClick function on click', () => {
    render(
      <IconButton onClick={mockedOnClick}>
        <Fa500Px />
      </IconButton>,
    );

    fireEvent.click(screen.getByRole('button'));

    expect(mockedOnClick).toHaveBeenCalledTimes(1);
  });
});
