import Card from '../../components/Card';
import Product from '../../Data/dataProduct.json';
import Navbar from '../../components/navbar';
import Cart from '../../components/Cart';
import { useState } from 'react';

const ProductPage = () => {
  const [cart, setCart] = useState([]);

  const handleProduct = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedProducts = cart.map((item) =>
        product.id === item.id ? { ...item, qty: item.qty + 1 } : item
      );
      setCart(updatedProducts);
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          qty: 1,
        },
      ]);
    }
  };

  return (
    <>
      <Navbar />
      <div className='flex pt-16'>
        <div className='flex flex-wrap lg:w-2/3 w-full justify-start p-5'>
          {Product.map((product) => {
            return (
              <div className='w-1/2 lg:w-1/4 mt-5' key={product.id}>
                <Card
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  price={product.price.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                  onClick={() => handleProduct(product)}
                />
              </div>
            );
          })}
        </div>
        <div className='w-1/3 hidden lg:block'>
          <Cart>
            {cart.map((item, index) => {
              const cartProduct = Product.find(
                (product) => item.id === product.id
              );

              return cartProduct ? (
                <Cart.Items
                  key={index}
                  name={cartProduct.title}
                  price={cartProduct.price}
                  qty={item.qty}
                  total={cartProduct.price * item.qty}
                />
              ) : null;
            })}
          </Cart>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
