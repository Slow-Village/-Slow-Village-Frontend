import { addDays } from 'date-fns';
import { atom } from 'recoil';

export type FilterType = {
    address: string;
    range_from: Date;
    range_to: Date;
    period: number;
    headcount: number;
}

export const FilterState = atom<FilterType>({
    key: 'filterstate',
    default: {
        address: 'All',
        range_from: addDays(new Date(), -3),
        range_to: new Date(),
        period: 1,
        headcount: 1
    },
})