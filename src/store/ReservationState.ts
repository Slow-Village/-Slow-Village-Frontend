import { addDays } from 'date-fns';
import { atom } from 'recoil';

export type ReservationType = {
    id: number;
    start_date: string;
    end_date: string;
}

export const ReservationState = atom<ReservationType | null>({
    key: 'reservationstate',
    default: null,
})