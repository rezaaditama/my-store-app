import PropTypes from 'prop-types';

const Cart = ({ children }) => {
  return (
    <div className='w-full px-3'>
      <div className=' text-center py-3 bg-slate-800'>
        <h1 className='font-bold text-white'>Cart</h1>
      </div>
      <div>
        <table className='table-fixed w-full'>
          <thead className='bg-slate-300'>
            <tr>
              <th className='border w-3/6 border-black p-1'>Product</th>
              <th className='border w-3/6 border-black p-1'>Price</th>
              <th className='border w-1/6 border-black p-1'>Qty</th>
              <th className='border w-3/6 border-black p-1'>Total</th>
            </tr>
          </thead>
          {children}
        </table>
      </div>
    </div>
  );
};

const Items = ({ name, price, qty, total }) => {
  return (
    <tbody className='break-words align-text-top'>
      <tr>
        <td className='border border-black px-2 py-1'>{name}</td>
        <td className='border border-black px-2 py-1'>
          {price.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </td>
        <td className='border border-black py-1 text-center'>{qty}</td>
        <td className='border border-black px-2 py-1'>
          {total.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </td>
      </tr>
    </tbody>
  );
};

Cart.propTypes = {
  children: PropTypes.node,
};

Items.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  total: PropTypes.number,
  qty: PropTypes.number,
};

Cart.Items = Items;

export default Cart;
