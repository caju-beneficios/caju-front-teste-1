import { render, screen, waitFor } from '@testing-library/react';

import DashboardPage from './index';
import { useRegistration } from '~/hooks';

jest.mock('./components/Searchbar', () => ({
  SearchBar: () => <div>SearchBar Component</div>,
}));

jest.mock('./components/Columns', () => () => <div>Columns Component</div>);

jest.mock('~/components/Loader', () => () => <div>Loading...</div>);

jest.mock('~/hooks', () => ({
  useRegistration: jest.fn(),
}));

describe('DashboardPage Component', () => {
  const fetchEmployeesMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRegistration as jest.Mock).mockReturnValue({
      fetchEmployees: fetchEmployeesMock,
      isLoading: false,
    });
  });

  it('should render the DashboardPage with SearchBar and Columns components', () => {
    render(<DashboardPage />);

    expect(screen.getByText(/SearchBar Component/i)).toBeInTheDocument();
    expect(screen.getByText(/Columns Component/i)).toBeInTheDocument();
  });

  it('should display the Loader when isLoading is true', () => {
    (useRegistration as jest.Mock).mockReturnValue({
      fetchEmployees: fetchEmployeesMock,
      isLoading: true,
    });

    render(<DashboardPage />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('should call fetchEmployees on component mount', async () => {
    render(<DashboardPage />);

    await waitFor(() => {
      expect(fetchEmployeesMock).toHaveBeenCalledTimes(1);
    });
  });
});
