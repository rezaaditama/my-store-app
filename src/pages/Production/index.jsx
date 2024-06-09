import Navbar from '../../components/Navbar';
import CartActions from '../../components/CartActions';
import Card from '../../components/Card';

const DetailProduct = () => {
  return (
    <>
      <Navbar />
      <div className='flex justify-evenly items-center  pt-16 py-5'>
        <div className='w-2/5 shadow-2xl'>
          <Card>
            <Card.Header
              image={'../../../public/assets/img/3191.jpg'}
              className={'p-10'}
            />
          </Card>
        </div>
        <div className='w-1/2 items-center px-5'>
          <CartActions className={'h-1/2'} />
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
