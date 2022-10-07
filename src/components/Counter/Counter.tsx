import { useState } from "react";
import { Controls } from "./Controls/";

interface Props {
  initialValue?: number;
}

const Counter = ({ initialValue = 0 }: Props) => {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => setValue((prev) => prev + 1);
  const handleDecrement = () => {
    if (value) {
      setValue((prev) => prev - 1);
    }
  };

  return (
    <div>
      <span>{value}</span>
      <Controls onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </div>
  );
};

export default Counter;
