import { useCallback, useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Cards } from './Cards';
import { ButtonIcon } from '../ui/ButtonIcon';
import { useThrottle } from '../../hooks/useThrottle';
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

  const THROTTLED_TIME = 1000;
  const showPrevCardThrottled = useThrottle(showPrevCard, THROTTLED_TIME);
  const showNextCardThrottled = useThrottle(showNextCard, THROTTLED_TIME);

  const handleArrowsKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === 'ArrowLeft') {
        showPrevCardThrottled();
      }
      if (e.code === 'ArrowRight') {
        showNextCardThrottled();
      }
    },
    [showPrevCardThrottled, showNextCardThrottled],
  );

  const handleArrowsKeydownThrottled = useThrottle(
    handleArrowsKeydown,
    THROTTLED_TIME,
  );

  useEffect(() => {
    if (!cards.length) {
      setCards(PHOTOS_ARR);
    }
  }, [cards.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleArrowsKeydownThrottled);
    return () => {
      window.removeEventListener('keydown', handleArrowsKeydownThrottled);
    };
  }, [handleArrowsKeydownThrottled]);

  return (
    <div className={s.wrapper}>
      <ButtonIcon onClick={showPrevCardThrottled}>
        <AiOutlineArrowLeft />
      </ButtonIcon>

      <Cards
        cardsData={cards}
        currentSlide={currentSlide}
        animationType={cardAnimationType}
      />

      <ButtonIcon onClick={showNextCardThrottled}>
        <AiOutlineArrowRight />
      </ButtonIcon>
    </div>
  );
};

export default Slider;
