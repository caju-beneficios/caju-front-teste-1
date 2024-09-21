import { render, screen } from '@testing-library/react';

import Columns from './index';
import { useRegistration } from '~/hooks';

jest.mock('~/hooks', () => ({
  ...jest.requireActual('~/hooks'),
  useRegistration: jest.fn(),
  useToast: jest.fn(() => ({ addToaster: jest.fn() })),
}));

jest.mock('~/services', () => ({
  getEmployees: jest.fn(),
}));

const mockRegistrations = [
  { id: '1', employeeName: 'Luiz Filho', status: 'REVIEW' },
  { id: '2', employeeName: 'Filipe', status: 'APPROVED' },
  { id: '3', employeeName: 'Jose', status: 'REPROVED' },
  { id: '4', employeeName: 'Joao', status: 'REVIEW' },
];

(useRegistration as jest.Mock).mockReturnValue({ registrations: mockRegistrations });

describe('Columns Component', () => {
  it('should render the columns with correct titles', () => {
    render(<Columns />);

    expect(screen.getByText(/Pronto para revisar/i)).toBeInTheDocument();
    expect(screen.getByText(/Aprovado/i)).toBeInTheDocument();
    expect(screen.getByText(/Reprovado/i)).toBeInTheDocument();
  });

  it('should display the correct number of RegistrationCard components for each status', () => {
    render(<Columns />);

    const reviewColumn = screen.getByText(/Pronto para revisar/i).closest('div');
    expect(reviewColumn).toBeInTheDocument();
    expect(screen.getAllByText(/Luiz Filho|Joao/).length).toBe(2);

    const approvedColumn = screen.getByText(/Aprovado/i).closest('div');
    expect(approvedColumn).toBeInTheDocument();
    expect(screen.getAllByText(/Filipe/).length).toBe(1);

    const reprovedColumn = screen.getByText(/Reprovado/i).closest('div');
    expect(reprovedColumn).toBeInTheDocument();
    expect(screen.getAllByText(/Jose/).length).toBe(1);
  });

  it('should handle empty registrations correctly', () => {
    (useRegistration as jest.Mock).mockReturnValue({ registrations: [] });

    render(<Columns />);

    expect(screen.getByText(/Pronto para revisar/i)).toBeInTheDocument();
    expect(screen.getByText(/Aprovado/i)).toBeInTheDocument();
    expect(screen.getByText(/Reprovado/i)).toBeInTheDocument();

    expect(screen.queryAllByTestId('registration-card')).toHaveLength(0);
  });
});
