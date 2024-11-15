
import { render, screen, waitFor } from "@testing-library/react";
import { UseGetRegistrationsReturn } from "../../hooks/registration/types";
import Collumns from ".";
import RegistrationPaginatedMockBuilder from "~/utils/__mocks__/RegistrationPaginatedMockBuilder";

const mockRegistrationsData = new RegistrationPaginatedMockBuilder()
    .addRegistration('1', 'tonhao@gmail.com', 'Teste User 1', '22/10/2023', 'APPROVED', '12345678901')
    .addRegistration('2', 'gretchen@gmail.com', 'Teste User 2', '22/10/2023', 'REVIEW', '98765432101')
    .addRegistration('3', 'john@gmail.com', 'Teste User 3', '22/10/2023', 'REPROVED', '11223344556')
    .build();

const mockRegistrationsQuery: UseGetRegistrationsReturn = {
    registrations: mockRegistrationsData.data,
    isLoading: false,
    isError: false,
    error: null,
    totalRegistrations: mockRegistrationsData.total,
    totalPages: mockRegistrationsData.totalPages,
    currentPage: mockRegistrationsData.currentPage,
    isFetching: false,
    refetch: jest.fn(),
};

describe('Collumns Component tests', () => {
    it('should render without crashing', () => {
        const { container } = render(<Collumns registrationsQuery={mockRegistrationsQuery} />);
        expect(container).toBeInTheDocument();
    });

    it('should display the correct column titles', () => {
        const { getByText } = render(<Collumns registrationsQuery={mockRegistrationsQuery} />);
        expect(screen.getByText('Pronto para revisar')).toBeInTheDocument();
        expect(getByText('Aprovado')).toBeInTheDocument();

    });

    it('should display the correct number of registration cards', async () => {
        render(<Collumns registrationsQuery={mockRegistrationsQuery} />);
        expect(screen.getAllByTestId('registration-card')).toHaveLength(3);
    });

    it('should display registrations in the correct columns based on status', () => {
        render(<Collumns registrationsQuery={mockRegistrationsQuery} />);

        const approvedColumn = screen.getByText('Aprovado').closest('div');
        const reviewColumn = screen.getByText('Pronto para revisar').closest('div');
        const reprovedColumn = screen.getByText('Reprovado').closest('div');

        expect(approvedColumn).toHaveTextContent('Teste User 1');
        expect(reviewColumn).toHaveTextContent('Teste User 2');
        expect(reprovedColumn).toHaveTextContent('Teste User 3');
    });

    it('should display empty content message when there are no registrations', async () => {
        const emptyRegistrationsQuery: UseGetRegistrationsReturn = {
            registrations: [],
            isLoading: false,
            isError: false,
            error: null,
            totalRegistrations: 0,
            totalPages: 0,
            currentPage: 0,
            isFetching: false,
            refetch: jest.fn(),
        };
        render(<Collumns registrationsQuery={emptyRegistrationsQuery} />);
        await waitFor(() => {
            const emptyMessages = screen.getAllByText('Nenhum Registro Encontrado.');
            expect(emptyMessages).toHaveLength(3);
        });
    });

    it('should display empty content message when no registrations match the filter', () => {
        const mockWithUnknowStatus = new RegistrationPaginatedMockBuilder()
            .addRegistration('1', 'tonhao@gmail.com', 'Teste User 1', '22/10/2023', 'UNKNOWN', '12345678901')
            .build();
        const noMatchRegistrationsQuery: UseGetRegistrationsReturn = {

            registrations: mockWithUnknowStatus.data,
            isLoading: false,
            isError: false,
            error: null,
            totalRegistrations: 1,
            totalPages: 1,
            currentPage: 1,
            isFetching: false,
            refetch: jest.fn(),
        };
        render(<Collumns registrationsQuery={noMatchRegistrationsQuery} />);
        const emptyMessages = screen.getAllByText('Nenhum Registro Encontrado.');
        expect(emptyMessages).toHaveLength(3);
    });

    it('should display empty content message when registrations is undefined', () => {
        const noMatchRegistrationsQuery: UseGetRegistrationsReturn = {

            registrations: undefined,
            isLoading: false,
            isError: false,
            error: null,
            totalRegistrations: 1,
            totalPages: 1,
            currentPage: 1,
            isFetching: false,
            refetch: jest.fn(),
        };
        render(<Collumns registrationsQuery={noMatchRegistrationsQuery} />);
        const emptyMessages = screen.getAllByText('Nenhum Registro Encontrado.');
        expect(emptyMessages).toHaveLength(3);
    });
});