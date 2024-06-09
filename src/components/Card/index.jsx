import PropTypes from 'prop-types';

const Card = ({ children }) => {
  return (
    <div className='mx-auto rounded-md shadow-xl overflow-hidden h-full w-full'>
      {children}
    </div>
  );
};

const Header = ({ image, title, className }) => {
  return (
    <div className={className}>
      <img src={image} alt={title} className='p-4 w-full h-full' />
    </div>
  );
};

const Description = ({ title, description, price, children }) => {
  return (
    <div className='p-3 space-y-1'>
      <h1 className='font-semibold line-clamp-1 text-center'>{title}</h1>
      <p className='text-justify text-gray-700 line-clamp-3 text-sm'>
        {description}
      </p>
      <h2 className='text-center font-semibold'>{price}</h2>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
};

Header.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
};

Description.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.node,
  children: PropTypes.node,
};

Card.Header = Header;
Card.Description = Description;

export default Card;
