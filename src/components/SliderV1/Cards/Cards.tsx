import { ICardsProps } from './types';
import s from './Cards.module.css';

const Cards = ({ cardsData }: ICardsProps) => {
  const [firstCard, secondCard, thirdCard] = cardsData;

  return (
    <>
      {cardsData.length ? (
        <div className={s.cardWrapper}>
          <div className={s.thirdCard} key={thirdCard.id}>
            <div className={s.cardThumb}>
              <img
                className={s.cardImg}
                src={thirdCard.image}
                alt={thirdCard.title}
              />
            </div>
          </div>

          <div className={s.secondCard} key={secondCard.id}>
            <div className={s.cardThumb}>
              <img
                className={s.cardImg}
                src={secondCard.image}
                alt={secondCard.title}
              />
            </div>
          </div>

          <div className={s.firstCard} key={firstCard.id}>
            <h1 className={s.cardTitle}>{firstCard.title}</h1>
            <p className={s.cardAnnotation}>{firstCard.annotation}</p>
            <div className={s.cardThumb}>
              <img
                className={s.cardImg}
                src={firstCard.image}
                alt={firstCard.title}
              />
            </div>
          </div>
        </div>
      ) : (
        <h1>Something went wrong</h1>
      )}
    </>
  );
};

export default Cards;
