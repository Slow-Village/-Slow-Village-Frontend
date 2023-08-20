import {atom} from 'recoil';

export type FilterType = {
    address: string;
    range_from: string;
    range_to: string;
    period: number;
    headcount: number;
}

export const FilterState = atom<FilterType>({
    key:'filterstate',
    default: {
        address: 'Gangseo-gu',
        range_from: '',
        range_to: '',
        period: 1,
        headcount: 1
    },
})