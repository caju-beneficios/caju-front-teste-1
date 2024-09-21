import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import RegistrationCard from './index';
import { Status } from '~/enum';
import { useRegistration, useToast } from '~/hooks';
import { deleteEmployee, editEmployee } from '~/services';

jest.mock('~/hooks', () => ({
  useRegistration: jest.fn(),
  useToast: jest.fn(),
}));

jest.mock('~/services', () => ({
  deleteEmployee: jest.fn(),
  editEmployee: jest.fn(),
}));

const mockEmployee = {
  id: 1,
  employeeName: 'John Doe',
  email: 'john.doe@example.com',
  admissionDate: '2023-09-10',
  cpf: '56530622438',
  status: Status.Review,
};

const addToasterMock = jest.fn();
const setRegistrationsMock = jest.fn();

(useToast as jest.Mock).mockReturnValue({ addToaster: addToasterMock });
(useRegistration as jest.Mock).mockReturnValue({ setRegistrations: setRegistrationsMock });

describe('RegistrationCard Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the RegistrationCard with employee data', () => {
    render(<RegistrationCard data={mockEmployee} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    expect(screen.getByText('2023-09-10')).toBeInTheDocument();
  });

  it('should open the modal when action buttons are clicked', () => {
    render(<RegistrationCard data={mockEmployee} />);

    fireEvent.click(screen.getByText(/Reprovar/i));
    expect(screen.getByText(/Tem certeza que deseja alterar o status/i)).toBeInTheDocument();
  });

  it('should execute the correct action when confirming the modal', async () => {
    (editEmployee as jest.Mock).mockResolvedValue({ id: '1', status: Status.Reproved });

    render(<RegistrationCard data={mockEmployee} />);

    fireEvent.click(screen.getByText(/Reprovar/i));
    fireEvent.click(screen.getByText(/Sim/i));

    await waitFor(() => {
      expect(editEmployee).toHaveBeenCalledWith({ ...mockEmployee, status: Status.Reproved });
      expect(addToasterMock).toHaveBeenCalledWith({
        text: 'Status alterado com sucesso!',
        variant: 'success',
      });
    });
  });

  it('should close the modal when cancel is clicked', () => {
    render(<RegistrationCard data={mockEmployee} />);

    fireEvent.click(screen.getByText(/Reprovar/i));
    fireEvent.click(screen.getByText(/Não/i));

    expect(screen.queryByText(/Tem certeza que deseja alterar o status/i)).not.toBeInTheDocument();
  });

  it('should handle employee deletion and show toast on success', async () => {
    (deleteEmployee as jest.Mock).mockResolvedValue({ id: 1 });

    render(<RegistrationCard data={mockEmployee} />);

    fireEvent.click(screen.getByLabelText('delete employee'));
    fireEvent.click(screen.getByText(/Sim/i));

    await waitFor(() => {
      expect(deleteEmployee).toHaveBeenCalledWith(1);
      expect(addToasterMock).toHaveBeenCalledWith({
        text: 'Usuário deletado com sucesso!',
        variant: 'success',
      });
    });
  });

  it('should handle status change and show toast on failure', async () => {
    (editEmployee as jest.Mock).mockRejectedValue(new Error('Failed to change status'));

    render(<RegistrationCard data={mockEmployee} />);

    fireEvent.click(screen.getByText(/Reprovar/i));
    fireEvent.click(screen.getByText(/Sim/i));

    await waitFor(() => {
      expect(addToasterMock).toHaveBeenCalledWith({
        text: 'Não foi possível alterar o status do usuário.',
        variant: 'danger',
      });
    });
  });

  it('should handle employee deletion and show toast on failure', async () => {
    (deleteEmployee as jest.Mock).mockRejectedValue(new Error('Failed to delete'));

    render(<RegistrationCard data={mockEmployee} />);

    fireEvent.click(screen.getByLabelText('delete employee'));
    fireEvent.click(screen.getByText(/Sim/i));

    await waitFor(() => {
      expect(addToasterMock).toHaveBeenCalledWith({
        text: 'Não foi possível deletar o usuário.',
        variant: 'danger',
      });
    });
  });
});
