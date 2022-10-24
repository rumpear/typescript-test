import { ICardsProps } from './types';
import s from './Cards.module.css';
import { useState } from 'react';

const slides = ['first', 'second', 'third'];

const Cards = ({ cardsData, isCardAnimated }: ICardsProps) => {
  const [firstCard, secondCard, thirdCard] = cardsData;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(0);

  // const handleClick = (direction: 'left' | 'right') => {
  //   setCurrentSlide(prev => prev + 1);
  // };

  console.log(cardsData);

  return (
    <div className={s.cardWrapper}>
      {slides.map((slide, idx, arr) => {
        const currIndex = (idx + currentSlide) % arr.length;
        console.log(idx, 'idx');
        console.log(currIndex, 'currIndex');
        console.log(arr.length, 'arr.length');
        return (
          <div
            key={slide}
            // className={classNames(['Card', `Card--${arr[currIndex]}`])}
          >
            <h1 className={s.cardTitle}>{cardsData[currentSlide].title}</h1>
            <p className={s.cardAnnotation}>
              {cardsData[currentSlide].annotation}
            </p>
            <div className={s.cardThumb}>
              <img
                className={s.cardImg}
                src={cardsData[currentSlide].image}
                alt={cardsData[currentSlide].title}
              />
            </div>
          </div>
        );
      })}

      {/* {cardsData.length ? (
        <div className={s.cardWrapper}>
          <div
            className={isCardAnimated ? s.thirdCardAnimate : s.thirdCard}
            // className={s.thirdCard}
            // className={s.thirdCardAnimate}
            key={thirdCard.id}
          >
            <div className={s.cardThumb}>
              <img
                className={s.cardImg}
                src={cardsData[currentSlide].image}
                alt={cardsData[currentSlide].title}
              />
            </div>
          </div>

          <div
            className={isCardAnimated ? s.secondCardAnimate : s.secondCard}
            // className={s.secondCard}
            // className={s.secondCardAnimate}
            key={secondCard.id}
          >
            <div className={s.cardThumb}>
              <img
                className={s.cardImg}
                src={secondCard.image}
                alt={secondCard.title}
              />
            </div>
          </div>

          <div
            className={isCardAnimated ? s.firstCardAnimate : s.firstCard}
            // className={s.firstCard}
            // className={s.firstCardAnimate}
            key={firstCard.id}
          >
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
      )} */}
    </div>
  );
};

export default Cards;
