import axios from 'axios';
import type { RegistrationPaginateResponse } from '~/data/models/registration';

export const getRegistrations = async (
    page = 1,
    limit = 10,
    cpf?: string,
    status?: string
): Promise<RegistrationPaginateResponse> => {
    try {
        const response = await axios.get('http://localhost:3002/registrations', {
            params: {
                _page: page,
                _limit: limit,
                cpf,
                status
            },
            headers: {
                Accept: 'application/json',
            },
        });

        const totalCount = parseInt(response.headers['x-total-count'] || '0');
        const totalPages = Math.ceil(totalCount / limit);

        return {
            data: response.data,
            total: totalCount,
            totalPages,
            currentPage: page
        };
    } catch (error) {
        throw error;
    }
};