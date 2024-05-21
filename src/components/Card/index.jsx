import PropTypes from 'prop-types';
import Button from '../../components/Button';

const Card = ({ image, title, description, price, onClick }) => {
  return (
    <div className='mx-auto rounded-md shadow-xl overflow-hidden'>
      <div className='lg:h-48 h-32'>
        <img src={image} alt={title} className=' p-4 w-full h-full' />
      </div>
      <div className='p-3 space-y-1'>
        <h1 className='font-semibold line-clamp-1  text-center'>{title}</h1>
        <p className='text-gray-700 line-clamp-2'>{description}</p>
        <h2 className='text-center font-semibold'>{price}</h2>
        <Button
          className={'bg-blue-600 hover:bg-blue-700 text-white w-full py-2'}
          type={'button'}
          onClick={onClick}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.node,
  onClick: PropTypes.func,
};

export default Card;
