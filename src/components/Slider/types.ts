export interface ICard {
  title: string;
  image: string;
  annotation: string;
  id: number;
}

export type TCardAnimationType = 'forward' | 'back' | '';
