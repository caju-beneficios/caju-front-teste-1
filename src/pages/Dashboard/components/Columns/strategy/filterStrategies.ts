import { APPROVED, REPROVED, REVIEW } from '../constants';
import { IFilterStrategy } from './filterStrategyInterface';
import type { Registration } from '~/data/models/registration';


export class ApprovedFilterStrategy implements IFilterStrategy {
    filter(registrations: Registration[]): Registration[] {
        return registrations.filter((registration) => registration.status === APPROVED);
    }
}

export class ReviewFilterStrategy implements IFilterStrategy {
    filter(registrations: Registration[]): Registration[] {
        return registrations.filter((registration) => registration.status === REVIEW);
    }
}

export class ReprovedFilterStrategy implements IFilterStrategy {
    filter(registrations: Registration[]): Registration[] {
        return registrations.filter((registration) => registration.status === REPROVED);
    }
}
