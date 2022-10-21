import { useCallback, useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Cards } from './Cards';
import { ButtonIcon } from '../ui/ButtonIcon';
import { PHOTOS_ARR } from '../../data/';
import { ICard } from './types';
import s from './Slider.module.css';

const Slider = () => {
  const [cards, setCards] = useState<ICard[]>([]);

  const showPrevCard = useCallback(() => {
    const deleteCount = cards.length;
    const startIdx = deleteCount - 1;
    const splicedCard = cards.splice(startIdx, deleteCount);
    setCards([...splicedCard, ...cards]);
  }, [cards]);

  const showNextCard = useCallback(() => {
    const startIdx = 0;
    const deleteCount = startIdx + 1;
    const splicedCard = cards.splice(startIdx, deleteCount);
    setCards([...cards, ...splicedCard]);
  }, [cards]);

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

      <Cards cardsData={cards} />

      <ButtonIcon onClick={showNextCard}>
        <AiOutlineArrowRight />
      </ButtonIcon>
    </div>
  );
};

export default Slider;
