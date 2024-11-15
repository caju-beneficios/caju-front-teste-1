import type { Registration } from '~/data/models/registration';

export interface IFilterStrategy {
    filter(registrations: Registration[]): Registration[];
}