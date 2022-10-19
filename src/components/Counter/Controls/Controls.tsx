import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { ButtonIcon } from '../../ui/ButtonIcon';
import s from './Controls.module.css';

interface IProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

const Controls = ({ onIncrement, onDecrement }: IProps) => (
  <div className={s.controlsWrapper}>
    <ButtonIcon onClick={onIncrement} aria-label="increment counter">
      <AiFillPlusCircle size={30} />
    </ButtonIcon>
    <ButtonIcon onClick={onDecrement} aria-label="decrement counter">
      <AiFillMinusCircle size={30} />
    </ButtonIcon>
  </div>
);

export default Controls;
