import { Component } from 'react';
import { Controls } from './Controls/';

interface Props {
  initialValue: number;
}

interface State {
  value: number;
}

class CounterClass extends Component<Props, State> {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () =>
    this.setState(prev => {
      return { value: prev.value + 1 };
    });

  handleDecrement = () => {
    this.setState(prev => {
      if (!prev.value) return;
      return { value: prev.value - 1 };

      // return { value: Math.max(prev.value - 1, 0) };
      // return prev.value !== 0 ? { value: prev.value - 1 } : prev;
    });
  };

  render() {
    const { state, handleIncrement, handleDecrement } = this;

    return (
      <div>
        <span>{state.value}</span>
        <Controls onIncrement={handleIncrement} onDecrement={handleDecrement} />
      </div>
    );
  }
}

export default CounterClass;
