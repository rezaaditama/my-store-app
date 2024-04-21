import Card from '../../components/Card';
import Product from '../../Data/dataProduct.json';
import Navbar from '../../components/navbar';

const ProductPage = () => {
  return (
    <div className=''>
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
    </div>
  );
};

export default ProductPage;
