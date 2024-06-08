import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import Cart from '../../components/Cart';
import { useState, useEffect } from 'react';
import { getProducts } from '../../services/ProductDB/ProductServices';
import { useAuth } from '../../hooks/useAuth';
import Button from '../../components/Button';

const ProductPage = () => {
  //Membuat state
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  //Memeriksa Token menggunakan custom hooks
  const isAuthenticated = useAuth();

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

  //Jika tidak ada token maka kembalikan null
  if (!isAuthenticated) {
    return null;
  }
  return (
    <>
      <Navbar />
      <div className='flex pt-16'>
        <div className='flex flex-wrap lg:w-2/3 w-full justify-start p-5'>
          {products.length > 0 &&
            products.map((product) => {
              return (
                <div className='w-1/2 lg:w-1/4 mt-5' key={product.id}>
                  <Card>
                    <Card.Header
                      image={product.image}
                      title={product.title}
                      className={'lg:h-48 h-32'}
                    />
                    <Card.Description
                      description={product.description}
                      price={product.price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    >
                      <Button
                        className={
                          'bg-blue-600 hover:bg-blue-700 text-white w-full py-2'
                        }
                        type={'button'}
                        onClick={() => handleProduct(product)}
                      >
                        Checkout
                      </Button>
                    </Card.Description>
                  </Card>
                </div>
              );
            })}
        </div>
        <div className='w-1/3 hidden lg:block'>
          <Cart>
            {cart.length > 0 &&
              cart.map((item, index) => {
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
            <Cart.Footer
              totalPrice={totalPrice.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            />
          </Cart>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
