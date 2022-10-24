import { ICard, TCardAnimationType } from '../types';

export interface ICardsProps {
  cardsData: ICard[];
  currentSlide: number;
  animationType: TCardAnimationType;
}
