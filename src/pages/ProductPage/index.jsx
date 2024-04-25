import Card from '../../components/Card';
import Product from '../../Data/dataProduct.json';
import Navbar from '../../components/navbar';
import Button from '../../components/Button';

import { useState } from 'react';

const ProductPage = () => {
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
    <div>
      <Navbar />
      <div className='flex flex-wrap w-full justify-start p-5 pt-14'>
        {Product.map((item, index) => {
          return (
            <div className='w-1/2 lg:w-1/4 mt-5' key={index}>
              <Card
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            </div>
          );
        })}
      </div>

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
    </div>
  );
};

export default ProductPage;
