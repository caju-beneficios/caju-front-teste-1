import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { useHistory } from 'react-router-dom';

import { SearchBar } from './index';
import { useRegistration } from '~/hooks';
import { isValidCPF, formatCPF, removeCPFFormatting } from '~/utils';

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(),
}));

jest.mock('~/hooks', () => ({
  useRegistration: jest.fn(),
}));

jest.mock('~/utils', () => ({
  isValidCPF: jest.fn(),
  formatCPF: jest.fn(),
  removeCPFFormatting: jest.fn(),
}));

const fetchEmployeesMock = jest.fn();
const pushMock = jest.fn();

(useRegistration as jest.Mock).mockReturnValue({ fetchEmployees: fetchEmployeesMock });
(useHistory as jest.Mock).mockReturnValue({ push: pushMock });

describe('SearchBar Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the SearchBar with input and buttons', () => {
    render(<SearchBar />);

    expect(screen.getByPlaceholderText(/digite um cpf válido/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /nova admissão/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/refetch/i)).toBeInTheDocument();
  });

  it('should format CPF input correctly and fetch employees when valid CPF is entered', async () => {
    (isValidCPF as jest.Mock).mockReturnValue(true);
    (formatCPF as jest.Mock).mockImplementation((cpf) => cpf);
    (removeCPFFormatting as jest.Mock).mockImplementation((cpf) => cpf.replace(/\D/g, ''));

    render(<SearchBar />);

    const input = screen.getByPlaceholderText(/digite um cpf válido/i);

    await act(async () => {
      fireEvent.change(input, { target: { value: '56530622438' } });
    });

    await waitFor(() => {
      expect(formatCPF).toHaveBeenCalledWith('56530622438');
      expect(removeCPFFormatting).toHaveBeenCalledWith('56530622438');
      expect(fetchEmployeesMock).toHaveBeenCalledWith('56530622438');
    });

    expect(input).toHaveValue('');
  });

  it('should not fetch employees when CPF is invalid', async () => {
    (isValidCPF as jest.Mock).mockReturnValue(false);

    render(<SearchBar />);

    const input = screen.getByPlaceholderText(/digite um cpf válido/i);

    await act(async () => {
      fireEvent.change(input, { target: { value: '123456789' } });
    });

    await waitFor(() => {
      expect(fetchEmployeesMock).not.toHaveBeenCalled();
    });
  });

  it('should navigate to new admission page when "Nova Admissão" button is clicked', async () => {
    render(<SearchBar />);

    const newAdmissionButton = screen.getByRole('button', { name: /nova admissão/i });

    await act(async () => {
      fireEvent.click(newAdmissionButton);
    });

    expect(pushMock).toHaveBeenCalledWith('/new-user');
  });

  it('should refetch employees when refresh button is clicked', async () => {
    render(<SearchBar />);

    const refreshButton = screen.getByLabelText(/refetch/i);

    await act(async () => {
      fireEvent.click(refreshButton);
    });

    expect(fetchEmployeesMock).toHaveBeenCalledTimes(1);
  });
});
