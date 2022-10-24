import { ICard, TCardAnimationType } from '../types';

export interface ICardsProps {
  cardsData: ICard[];
  currentSlide: number;
  cardAnimationType: TCardAnimationType;
}
