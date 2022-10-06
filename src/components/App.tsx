import { Counter, CounterClass } from './Counter';
import { Form } from './Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <CounterClass initialValue={1} />
        <Form />
      </header>
    </div>
  );
}

export default App;
