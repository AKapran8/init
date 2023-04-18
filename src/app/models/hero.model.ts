import { IMessageResponse } from './message-repsonse.model';

export interface IAddEditHero {
  name: string;
  image?: File;
  animeId: string;
  imageUrl: string;
  imagePath?: string;
}

export interface IHero {
  id: string;
  name: string;
  imageUrl: string;
  quotes: string[];
  animeId: string;
}
export interface IHeroTableData extends IHero {
  imagePath: string;
}

export interface IHeroForQuote {
  text: string;
  id: string;
}

export interface IAddEditHeroDialogData {
  type: 'add' | 'edit';
  heroId?: string;
  initialValue?: IAddEditHero;
}

export interface IAddEditHeroResponse extends IMessageResponse {
  hero: IHero;
}

export interface IGetHeroesResponse extends IMessageResponse {
  data: IHero[];
}

export interface IGetHeroesNameResponse extends IMessageResponse {
  data: IHeroForQuote[];
}