import { fireEvent, render, screen } from '@testing-library/react';

import { AlertModal } from '.';

describe('Alert Modal', () => {
  const mockedOnRequestClose = jest.fn();

  beforeEach(() => {
    mockedOnRequestClose.mockClear();
  });

  it('should render', () => {
    const mockedTitle = 'AlertModal';

    render(
      <AlertModal show title={mockedTitle} onClose={mockedOnRequestClose}>
        <p>Content</p>
      </AlertModal>,
    );

    expect(screen.getByText(mockedTitle)).toBeTruthy();
  });

  it('should be able to render children', () => {
    const mockedTitle = 'AlertModal';

    render(
      <AlertModal show title={mockedTitle} onClose={mockedOnRequestClose}>
        <p>Content</p>
      </AlertModal>,
    );

    expect(screen.getByText('Content')).toBeTruthy();
  });

  it('should call onClose function when click on close button', () => {
    render(
      <AlertModal show title="Alert Modal" onClose={mockedOnRequestClose}>
        <p>Content</p>
      </AlertModal>,
    );

    fireEvent.click(screen.getByRole('button'));

    expect(mockedOnRequestClose).toHaveBeenCalledTimes(1);
  });

  it('should call onClose function when click ESC', () => {
    const mockedTitle = 'Alert Modal';

    render(
      <AlertModal show title={mockedTitle} onClose={mockedOnRequestClose}>
        <p>Content</p>
      </AlertModal>,
    );

    fireEvent.keyDown(screen.getByText(mockedTitle), {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
    });

    expect(mockedOnRequestClose).toHaveBeenCalledTimes(1);
  });
});
