import {atom} from 'recoil';

export type SelectedType = {
    id: number
}

export const SelectedState = atom<SelectedType>({
    key:'filterstate',
    default: {
        id: 0
    },
})