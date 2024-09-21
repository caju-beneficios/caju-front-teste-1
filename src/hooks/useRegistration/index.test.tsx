import { render, screen, waitFor, act } from '@testing-library/react';

import { RegistrationProvider, useRegistration } from './index';
import { useToast } from '~/hooks/useToast';
import { getEmployees } from '~/services';

jest.mock('~/hooks/useToast', () => ({
  useToast: jest.fn(),
}));

jest.mock('~/services', () => ({
  getEmployees: jest.fn(),
}));

const MockComponent = () => {
  const { registrations, fetchEmployees, isLoading } = useRegistration();

  return (
    <div>
      <button onClick={() => fetchEmployees()}>Fetch Employees</button>
      {isLoading && <p>Loading...</p>}
      {registrations?.map((employee) => (
        <div key={employee.id}>{employee.employeeName}</div>
      ))}
    </div>
  );
};

describe('RegistrationProvider', () => {
  const addToasterMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useToast as jest.Mock).mockReturnValue({ addToaster: addToasterMock });
  });

  it('should render children and provide context values', () => {
    render(
      <RegistrationProvider>
        <MockComponent />
      </RegistrationProvider>
    );

    expect(screen.getByRole('button', { name: /fetch employees/i })).toBeInTheDocument();
  });

  it('should fetch employees successfully and update state', async () => {
    const mockEmployees = [{ id: '1', name: 'luiz eduardo' }];
    (getEmployees as jest.Mock).mockResolvedValue(mockEmployees);

    render(
      <RegistrationProvider>
        <MockComponent />
      </RegistrationProvider>
    );

    await act(async () => {
      screen.getByRole('button', { name: /fetch employees/i }).click();
    });

    await waitFor(() => {
      expect(addToasterMock).toHaveBeenCalledWith({
        text: 'Usuários recuperados com sucesso.',
        variant: 'success',
      });
    });
  });

  it('should handle errors when fetching employees', async () => {
    (getEmployees as jest.Mock).mockRejectedValue(new Error('Fetch failed'));

    render(
      <RegistrationProvider>
        <MockComponent />
      </RegistrationProvider>
    );

    await act(async () => {
      screen.getByRole('button', { name: /fetch employees/i }).click();
    });

    await waitFor(() => {
      expect(addToasterMock).toHaveBeenCalledWith({
        text: 'Não foi possível recuperar os dados dos usuários.',
        variant: 'danger',
      });
    });
  });
});
