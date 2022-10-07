import { ButtonIcon } from '../../ui/ButtonIcon';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

interface Props {
  onIncrement: () => void;
  onDecrement: () => void;
}

const Controls = ({ onIncrement, onDecrement }: Props) => (
  <div>
    <ButtonIcon onClick={onIncrement} aria-label="increment counter">
      <AiFillPlusCircle size={30} />
    </ButtonIcon>
    <ButtonIcon onClick={onDecrement} aria-label="decrement counter">
      <AiFillMinusCircle size={30} />
    </ButtonIcon>
  </div>
);

export default Controls;
