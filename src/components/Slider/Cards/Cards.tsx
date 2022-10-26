import classNames from 'classnames/bind';
import { TOTAL_SLIDES_COUNT } from '../../../data';
import { ICardsProps } from './types';
import s from './Cards.module.css';

const Cards = ({ cardsData, currentSlide, animationType }: ICardsProps) => {
  const cx = classNames.bind(s);

  return (
    <>
      {cardsData.length ? (
        <div className={s.wrapper}>
          {TOTAL_SLIDES_COUNT.map((slide, idx, arr) => {
            const currIndex = (idx + currentSlide) % arr.length;
            return (
              <div
                key={slide}
                className={cx([
                  `card${arr[currIndex]}`,
                  { [animationType]: animationType },
                ])}
              >
                <h1 className={s.title}>{cardsData[currentSlide].title}</h1>
                <p className={s.annotation}>
                  {cardsData[currentSlide].annotation}
                </p>
                <div className={s.thumb} />
              </div>
            );
          })}
        </div>
      ) : (
        <p className={s.errorMessage}>Something went wrong</p>
      )}
    </>
  );
};

export default Cards;
