import Counter from '../Counter';
import Button from '../Button';

const CartActions = () => {
  return (
    <div className='border border-black py-2 px-10 space-y-3 rounded'>
      <h1 className='font-bold text-center text-xl '>Checkout</h1>
      <figure className='flex flex-col justify-center items-center'>
        <img
          src='../../../public/assets/img/2150887410.jpg'
          alt=''
          className='w-3/4 h-full rounded'
        />
        <figcaption className='font-bold line-clamp-2'>Hallo</figcaption>
      </figure>
      <div className='flex justify-between'>
        <p>Kuantitas : </p>
        <Counter />
        <p>Stok : 52</p>
      </div>
      <div className='flex justify-between font-bold text-lg'>
        <h1>Sub total</h1>
        <h1>Rp. 90.000</h1>
      </div>
      <div className='space-y-2 px-5 pb-5'>
        <Button
          type='button'
          className={'w-full bg-slate-800 text-white py-1.5'}
        >
          Add to Cart
        </Button>
        <Button
          type='button'
          className={'w-full bg-slate-800 text-white py-1.5'}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default CartActions;
