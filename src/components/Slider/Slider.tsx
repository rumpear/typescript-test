import { useCallback, useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Cards } from './Cards';
import { ButtonIcon } from '../ui/ButtonIcon';
import { PHOTOS_ARR } from '../../data/';
import { ICard, TCardAnimationType } from './types';
import s from './Slider.module.css';

const Slider = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardAnimationType, setCardAnimationType] =
    useState<TCardAnimationType>('');
  const totalSlidesIdx = cards.length - 1;

  const showPrevCard = useCallback(() => {
    setCurrentSlide(prev => {
      return prev <= 0 ? totalSlidesIdx : prev - 1;
    });
    setCardAnimationType('back');
  }, [totalSlidesIdx]);

  const showNextCard = useCallback(() => {
    setCurrentSlide(prev => {
      return prev >= totalSlidesIdx ? 0 : prev + 1;
    });
    setCardAnimationType('forward');
  }, [totalSlidesIdx]);

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

      <Cards
        cardsData={cards}
        currentSlide={currentSlide}
        cardAnimationType={cardAnimationType}
      />

      <ButtonIcon onClick={showNextCard}>
        <AiOutlineArrowRight />
      </ButtonIcon>
    </div>
  );
};

export default Slider;
