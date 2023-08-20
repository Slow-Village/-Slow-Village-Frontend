import {atom} from 'recoil';


export type ArticleType = {
    id: number;
    title: string,
    address: string,
    first_name: string,
    last_name: string,
    image: string,
    contents: Array<any>,
    features: Array<string>
}

export const ArticleState = atom<ArticleType>({
    key:'filterstate',
    default: {
        id: 0,
        title: "",
        address: "",
        first_name: "",
        last_name: "",
        image: "",
        contents: [],
        features: []
    },
})