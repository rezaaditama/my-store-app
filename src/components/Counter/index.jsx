import { useState } from 'react';
import Button from '../Button';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className='flex'>
      <Button
        type='button'
        className={'bg-slate-800 text-white mr-2 px-1.5 rounded-sm'}
        onClick={decrementCounter}
      >
        -
      </Button>
      <p>{counter}</p>
      <Button
        type='button'
        className={'bg-slate-800 text-white ml-2 px-1.5 rounded-sm'}
        onClick={incrementCounter}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
