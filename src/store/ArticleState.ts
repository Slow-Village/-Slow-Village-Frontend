import { atom } from 'recoil';

export type ArticleType = {
  id: number;
  title: string;
  address: string;
  first_name: string;
  last_name: string;
  image: string;
  contents: Array<any>;
  features: Array<string>;
  reviews: Array<string>;
};

export type ArticleListType = {
  items: Array<ArticleType>;
};

export const ArticleState = atom<ArticleListType>({
  key: 'filterstate',
  default: {
    items: [],
  },
});
