import Button from '../Button';
import PropTypes from 'prop-types';

const ContactInfo = ({ className, children }) => {
  return (
    <div className={`${className} shadow-2xl p-5`}>
      <table className='w-full'>{children}</table>
      <div className='flex justify-end mt-6'>
        <Button className={'w-1/3 text-white py-2 bg-gray-800'} type='button'>
          Edit
        </Button>
      </div>
    </div>
  );
};

const Items = ({ name, username, email, phone, address }) => {
  return (
    <tbody>
      <tr className='shadow-md'>
        <td className='h-10 p-5 font-semibold'>Full Name</td>
        <td className='h-10 p-5 capitalize'>{name}</td>
      </tr>
      <tr className='shadow-md'>
        <td className='h-10 p-5 capitalize font-semibold'>Username</td>
        <td className='h-10 p-5 capitalize'>{username}</td>
      </tr>
      <tr className='shadow-md'>
        <td className='h-10 p-5 capitalize font-semibold'>E-mail</td>
        <td className='h-10 p-5'>{email}</td>
      </tr>
      <tr className='shadow-md'>
        <td className='h-10 p-5 capitalize font-semibold'>Phone</td>
        <td className='h-10 p-5 capitalize'>{phone}</td>
      </tr>
      <tr className='shadow-md'>
        <td className='h-10 p-5 capitalize font-semibold'>Address</td>
        <td className='h-10 p-5 capitalize'>{address}</td>
      </tr>
    </tbody>
  );
};

ContactInfo.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Items.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

ContactInfo.Items = Items;

export default ContactInfo;
