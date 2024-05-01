import Card from '../../components/Card';
import Product from '../../Data/dataProduct.json';
import Navbar from '../../components/navbar';
import Cart from '../../components/Cart';
import { useState } from 'react';

const ProductPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'sepatu baru',
      price: 900000,
      qty: 1,
      total: 900000,
    },
  ]);

  const handleProduct = (item) => {
    const existingProduct = products.find((product) => item.id === product.id);

    if (existingProduct) {
      const updatedProducts = products.map((product) =>
        product.id === item.id ? { ...product, qty: product.qty + 1 } : product
      );
      setProducts(updatedProducts);
    } else {
      setProducts([
        ...products,
        {
          id: item.id,
          name: item.title,
          price: item.price,
          qty: 1,
        },
      ]);
    }
  };

  return (
    <>
      <Navbar />
      <div className='flex pt-16'>
        <div className='flex flex-wrap w-2/3 justify-start p-5'>
          {Product.map((item) => {
            return (
              <div className='w-1/2 lg:w-1/4 mt-5' key={item.id}>
                <Card
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  price={item.price.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                  onClick={() => handleProduct(item)}
                />
              </div>
            );
          })}
        </div>
        <div className='w-1/3'>
          <Cart>
            {products.map((item, index) => (
              <Cart.Items
                key={index}
                name={item.name}
                price={item.price}
                qty={item.qty}
                total={item.price * item.qty}
              />
            ))}
          </Cart>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
