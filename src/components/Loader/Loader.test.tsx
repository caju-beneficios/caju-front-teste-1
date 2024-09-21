import { render } from '@testing-library/react';

import Loader from './index';

describe('Component Loader', () => {
  it('should render correctly', () => {
    const { container } = render(<Loader />);

    expect(container).toMatchSnapshot();
  });
});
