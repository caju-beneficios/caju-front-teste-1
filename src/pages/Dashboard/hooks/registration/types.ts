
import type { CustomError } from '~/data/models/errors';
import type { RegistrationPaginateResponse } from '~/data/models/registration';


export interface UseGetRegistrationsParams {
    currentPage: number;
    pageSize?: number;
    cpf?: string;
    status?: string;
}

export interface UseGetRegistrationsReturn {
    registrations: RegistrationPaginateResponse['data'] | undefined;
    isLoading: boolean;
    isError: boolean;
    error: CustomError | null;
    refetch: () => void;
    totalPages: number;
    totalRegistrations: number;
    currentPage: number;
    isFetching: boolean;
}