import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useHistory } from 'react-router-dom';

import NewUserPage from './index';
import { useToast } from '~/hooks';
import { registerEmployee } from '~/services';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn(),
}));

jest.mock('~/hooks', () => ({
  useToast: jest.fn(),
}));

jest.mock('~/services', () => ({
  registerEmployee: jest.fn(),
}));

jest.mock('@hookform/resolvers/zod', () => ({
  zodResolver: jest.fn(),
}));

jest.mock('zod', () => {
  const actualZod = jest.requireActual('zod');
  return {
    ...actualZod,
    object: jest.fn().mockReturnValue({
      parse: jest.fn().mockImplementation((data) => data),
    }),
  };
});

jest.mock('~/utils', () => ({
  formatCPF: jest.fn((cpf) => cpf),
  removeCPFFormatting: jest.fn((cpf) => cpf.replace(/\D/g, '')),
}));

const addToasterMock = jest.fn();
const pushMock = jest.fn();

(useToast as jest.Mock).mockReturnValue({ addToaster: addToasterMock });
(useHistory as jest.Mock).mockReturnValue({ push: pushMock });

describe('NewUserPage Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the NewUserPage with all form fields and buttons', () => {
    render(<NewUserPage />);

    expect(screen.getByPlaceholderText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/CPF/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Data de admissão/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Cadastrar/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/back/i)).toBeInTheDocument();
  });

  it('should format CPF correctly when typed', () => {
    render(<NewUserPage />);

    const cpfInput = screen.getByPlaceholderText(/CPF/i);
    fireEvent.change(cpfInput, { target: { value: '12345678909' } });

    expect(cpfInput).toHaveValue('12345678909');
  });

  it('should navigate back to the dashboard when the back button is clicked', () => {
    render(<NewUserPage />);

    fireEvent.click(screen.getByLabelText(/back/i));
    expect(pushMock).toHaveBeenCalledWith('/dashboard');
  });

  it('should submit the form successfully and show a success toast', async () => {
    (registerEmployee as jest.Mock).mockResolvedValue({});

    render(<NewUserPage />);

    fireEvent.change(screen.getByPlaceholderText(/Nome/i), {
      target: { value: 'Luiz Eduardo' },
    });
    fireEvent.change(screen.getByPlaceholderText(/E-mail/i), {
      target: { value: 'luiz.eduardo@caju.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/CPF/i), {
      target: { value: '565.306.224-38' },
    });
    fireEvent.change(screen.getByLabelText(/Data de admissão/i), {
      target: { value: '2024-09-21' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));

    await waitFor(() => {
      expect(registerEmployee).toHaveBeenCalledWith({
        employeeName: 'Luiz Eduardo',
        email: 'luiz.eduardo@caju.com',
        cpf: '56530622438',
        admissionDate: '2024-09-21',
        status: 'REVIEW',
      });

      expect(addToasterMock).toHaveBeenCalledWith({
        text: 'Usuários cadastrado com sucesso.',
        variant: 'success',
      });

      expect(pushMock).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('should display an error toast when form submission fails', async () => {
    (registerEmployee as jest.Mock).mockRejectedValue(new Error('Failed to register'));

    render(<NewUserPage />);

    fireEvent.change(screen.getByPlaceholderText(/Nome/i), {
      target: { value: 'Luiz Eduardo' },
    });
    fireEvent.change(screen.getByPlaceholderText(/E-mail/i), {
      target: { value: 'luiz.eduardo@caju.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/CPF/i), {
      target: { value: '565.306.224-38' },
    });
    fireEvent.change(screen.getByLabelText(/Data de admissão/i), {
      target: { value: '2024-09-21' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));

    await waitFor(() => {
      expect(addToasterMock).toHaveBeenCalledWith({
        text: 'Não foi possível cadastrar o novo usuário!',
        variant: 'danger',
      });
    });
  });
});
