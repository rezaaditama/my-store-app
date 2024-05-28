import Card from '../../components/Card';
import Navbar from '../../components/navbar';
import Cart from '../../components/Cart';
import { useState, useEffect } from 'react';
import { getProducts } from '../../services/ProductDB/ProductServices';

const ProductPage = () => {
  //Membuat state
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  //Memeriksa Token
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/';
    }
  }, []);

  //Fetching data API
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  //Load Cart
  useEffect(() => {
    const cartItems = localStorage.getItem('product');
    cartItems ? setCart(JSON.parse(cartItems)) : [];
  }, []);

  //Membuat total pada cart
  useEffect(() => {
    if (products.length > 0) {
      const sumPrice = cart.reduce((acc, item) => {
        const selectedProduct = products.find(
          (product) => product.id === item.id
        );
        return acc + selectedProduct.price * item.qty;
      }, 0);
      setTotalPrice(sumPrice);
    }
  }, [cart, products]);

  //Handle add to cart
  const handleProduct = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedProducts = cart.map((item) =>
        product.id === item.id ? { ...item, qty: item.qty + 1 } : item
      );
      setCart(updatedProducts);
      localStorage.setItem('product', JSON.stringify(updatedProducts));
    } else {
      const updatedProducts = [
        ...cart,
        {
          id: product.id,
          qty: 1,
        },
      ];

      setCart(updatedProducts);
      localStorage.setItem('product', JSON.stringify(updatedProducts));
    }
  };

  return (
    <>
      <Navbar />
      <div className='flex pt-16'>
        <div className='flex flex-wrap lg:w-2/3 w-full justify-start p-5'>
          {products.map((product) => {
            return (
              <div className='w-1/2 lg:w-1/4 mt-5' key={product.id}>
                <Card
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  price={product.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
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
              const cartProduct = products.find(
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
            {products.length > 0 && (
              <Cart.Footer
                totalPrice={totalPrice.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              />
            )}
          </Cart>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
