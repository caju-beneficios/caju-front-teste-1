import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { ReactNode } from "react";
import { getRegistrations } from "~/data/services/registration/registration-service";
import useGetRegistrations from "../registration/useGetRegistrations";
import RegistrationPaginatedMockBuilder from "~/utils/__mocks__/RegistrationPaginatedMockBuilder";


interface WrapperProps {
    children: ReactNode;
}

jest.mock('~/data/services/registration/registration-service', () => ({
    getRegistrations: jest.fn(),
}));

const mockRegistrationsData = new RegistrationPaginatedMockBuilder()
    .addRegistration('1', 'tonhao@gmail.com', 'Test User 1', '22/10/2023', 'APROVED', '12345678901')
    .addRegistration('2', 'gretchen@gmail.coom', 'REVIEW', '22/10/2023', 'APROVED', '98765432101')
    .setTotal(2)
    .setTotalPages(1)
    .setCurrentPage(1)
    .build();

describe('useGetRegistrations hook', () => {
    let queryClient: QueryClient;
    beforeEach(() => {
        jest.clearAllMocks();
        queryClient = new QueryClient();
    });

    const wrapper = ({ children }: WrapperProps) => (
        <QueryClientProvider client={queryClient} > {children} </QueryClientProvider>
    )

    it('should return loading state initially', () => {
        (getRegistrations as jest.Mock).mockResolvedValueOnce(mockRegistrationsData);

        const { result } = renderHook(() => useGetRegistrations({ currentPage: 1 }), { wrapper });

        expect(result.current.isLoading).toBe(true);
        expect(result.current.registrations).toBeUndefined();
        expect(result.current.totalPages).toBe(1);
    });

    it('should return data when fetch is successful', async () => {
        (getRegistrations as jest.Mock).mockResolvedValueOnce(mockRegistrationsData);

        const { result } = renderHook(() => useGetRegistrations({ currentPage: 1 }), { wrapper });

        await waitFor(() => {
            expect(getRegistrations).toHaveBeenCalledWith(1, 5, undefined, undefined);
        })

        expect(result.current.isLoading).toBe(false);
        expect(result.current.registrations).toEqual(mockRegistrationsData.data);
        expect(result.current.totalPages).toBe(1);
        expect(result.current.totalRegistrations).toBe(2);
    });

    it('shouls return error when fetch is failed', async () => {
        (getRegistrations as jest.Mock).mockRejectedValueOnce(new Error('Erro ao buscar dados'));

        const { result } = renderHook(() => useGetRegistrations({ currentPage: 1 }), { wrapper });

        await waitFor(() => {
            expect(result.current.isError).toBe(true)
            expect(result.current.error?.message).toEqual('Erro ao buscar dados');
        });
    });
});
