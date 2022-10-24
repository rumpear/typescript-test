import classNames from 'classnames/bind';
import { TOTAL_SLIDES_COUNT } from '../../../data';
import { ICardsProps } from './types';
import s from './Cards.module.css';

const Cards = ({ cardsData, currentSlide, cardAnimationType }: ICardsProps) => {
  const cx = classNames.bind(s);

  return (
    <>
      {cardsData.length ? (
        <div className={s.cardWrapper}>
          {TOTAL_SLIDES_COUNT.map((slide, idx, arr) => {
            const currIndex = (idx + currentSlide) % arr.length;
            return (
              <div
                key={slide}
                className={cx([
                  `card${arr[currIndex]}`,
                  { [cardAnimationType]: cardAnimationType },
                ])}
              >
                <h1 className={s.cardTitle}>{cardsData[currentSlide].title}</h1>
                <p className={s.cardAnnotation}>
                  {cardsData[currentSlide].annotation}
                </p>
                <div className={s.cardThumb} />
              </div>
            );
          })}
        </div>
      ) : (
        <h1>Something went wrong</h1>
      )}
    </>
  );
};

export default Cards;
