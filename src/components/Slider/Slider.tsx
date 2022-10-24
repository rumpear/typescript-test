import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Cards } from './Cards';
import { ButtonIcon } from '../ui/ButtonIcon';
import { PHOTOS_ARR } from '../../data/';
import { ICard } from './types';
import s from './Slider.module.css';

const slides = ['first', 'second', 'third'];

const Slider = () => {
  const cx = classNames.bind(s);

  const [cards, setCards] = useState<ICard[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isCardAnimated, setIsCardAnimated] = useState(false);
  const totalSlidesIdx = cards.length - 1;

  const showPrevCard = useCallback(() => {
    setCurrentSlide(prev => {
      if (prev <= 0) {
        return totalSlidesIdx;
      }
      return prev - 1;
    });
  }, [totalSlidesIdx]);

  const showNextCard = useCallback(() => {
    setCurrentSlide(prev => {
      if (prev >= totalSlidesIdx) {
        return 0;
      }
      return prev + 1;
    });
  }, [totalSlidesIdx]);

  // const showPrevCard = useCallback(() => {
  //   const deleteCount = cards.length;
  //   const startIdx = deleteCount - 1;
  //   const splicedCard = cards.splice(startIdx, deleteCount);
  //   setCards([...splicedCard, ...cards]);
  //   setIsCardAnimated(true);
  // }, [cards]);

  // const showNextCard = useCallback(() => {
  //   const startIdx = 0;
  //   const deleteCount = startIdx + 1;
  //   const splicedCard = cards.splice(startIdx, deleteCount);
  //   setCards([...cards, ...splicedCard]);
  //   setIsCardAnimated(true);
  // }, [cards]);

  const handleArrowBtnsClick = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === 'ArrowLeft') {
        showPrevCard();
      }
      if (e.code === 'ArrowRight') {
        showNextCard();
      }
    },
    [showNextCard, showPrevCard],
  );

  useEffect(() => {
    if (!cards.length) {
      setCards(PHOTOS_ARR);
    }
  }, [cards.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleArrowBtnsClick);
    return () => {
      window.removeEventListener('keydown', handleArrowBtnsClick);
    };
  }, [handleArrowBtnsClick]);

  return (
    <div className={s.wrapper}>
      <ButtonIcon onClick={showPrevCard}>
        <AiOutlineArrowLeft />
      </ButtonIcon>

      {/* {cards.length && (
        <Cards cardsData={cards} isCardAnimated={isCardAnimated} />
      )} */}

      {cards.length && (
        <div className={s.cardWrapper}>
          {slides.map((slide, idx, arr) => {
            const currIndex = (idx + currentSlide) % arr.length;
            // console.log(idx, 'idx');
            // console.log(currIndex, 'currIndex');
            // console.log(arr.length, 'arr.length');

            // if (idx === currentSlide) {
            //   console.log(idx, 'idx');
            // }

            // console.log(currentSlide, 'currentSlide');
            return (
              <div
                key={slide}
                className={cx([
                  // 'Card',
                  `Card--${arr[currIndex]}`,
                  // { isActive: idx === currentSlide },
                ])}
              >
                <h1 className={s.cardTitle}>{cards[currIndex].title}</h1>
                <p className={s.cardAnnotation}>
                  {cards[currIndex].annotation}
                </p>
                <div className={s.cardThumb}>
                  <img
                    className={s.cardImg}
                    src={cards[currIndex].image}
                    alt={cards[currIndex].title}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      <ButtonIcon onClick={showNextCard}>
        <AiOutlineArrowRight />
      </ButtonIcon>
    </div>
  );
};

export default Slider;
