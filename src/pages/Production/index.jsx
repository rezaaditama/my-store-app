import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import CartActions from '../../components/CartActions';

const DetailProduct = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='flex pt-16'>
        <div className='w-1/3'>
          <Card>
            <Card.Header
              image={'../../../public/assets/img/8440.jpg'}
              className={''}
            />
            <Card.Description title={'halo'} />
          </Card>
        </div>
        <div className='w-1/3'>
          <p>Hello</p>
        </div>
        <div className='w-1/3'>
          <CartActions></CartActions>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
