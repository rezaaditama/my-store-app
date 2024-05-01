import Button from '../../components/Button';

import { useState } from 'react';

const Index = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className='flex items-center justify-center space-x-4 py-10'>
      <Button
        className={'px-3 py-1 bg-black text-white'}
        onClick={decrement}
        type={'button'}
      >
        -
      </Button>
      <p>{count}</p>
      <Button
        className={'px-2 py-1 bg-black text-white'}
        onClick={increment}
        type={'button'}
      >
        +
      </Button>
    </div>
  );
};

export default Index;
