import Counter from '../Counter';
import Button from '../Button';
import PropTypes from 'prop-types';

const CartActions = ({ className }) => {
  return (
    <div
      className={`${className} border border-black py-2 px-10 space-y-3 rounded`}
    >
      <div className='space-y-2'>
        <h1 className='font-bold text-2xl text-center'>Halo</h1>
        <p className='text-sm line-clamp-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          laboriosam culpa, unde iste deserunt ad necessitatibus blanditiis. At
          omnis saepe repudiandae sint quibusdam consequatur magnam, impedit
          tempore minus amet cum nam modi tempora ut est ducimus iusto vitae quo
          earum laudantium error rem accusamus atque. Suscipit impedit nesciunt
          eum velit tempora, necessitatibus quidem dolores excepturi id eligendi
          laboriosam odit possimus. Harum ea at rerum odio tenetur quos
          distinctio adipisci nihil eum autem commodi est, praesentium quibusdam
          repellendus vel. Rem dolores aperiam unde amet. Est accusantium omnis
          hic labore alias voluptas, quos fugit laudantium, voluptates nesciunt
          necessitatibus! Deleniti neque non minus.
        </p>
      </div>
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

CartActions.propTypes = {
  className: PropTypes.string,
};

export default CartActions;
