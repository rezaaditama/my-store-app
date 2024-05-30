import Button from '../Button';
import PropTypes from 'prop-types';

const ContactInfo = ({ className }) => {
  return (
    <div className={`${className} shadow-2xl p-5`}>
      <table className='w-full'>
        <tbody>
          <tr className='shadow-md'>
            <td className='h-10 p-5 font-semibold'>Full Name</td>
            <td className='h-10 p-5'>Reza Aditama</td>
          </tr>
          <tr className='shadow-md'>
            <td className='h-10 p-5 font-semibold'>Email</td>
            <td className='h-10 p-5'>aditamareza03@gmail.com</td>
          </tr>
          <tr className='shadow-md'>
            <td className='h-10 p-5 font-semibold'>Phone</td>
            <td className='h-10 p-5'>08381955351</td>
          </tr>
          <tr className='shadow-md'>
            <td className='h-10 p-5 font-semibold'>Address</td>
            <td className='h-10 p-5'>jl. jhasfhsdciusdcosnce</td>
          </tr>
        </tbody>
      </table>
      <div className='flex justify-end mt-6'>
        <Button className={'w-1/6 text-white py-2 bg-gray-800'} type='button'>
          Edit
        </Button>
      </div>
    </div>
  );
};

ContactInfo.propTypes = {
  className: PropTypes.string,
};

export default ContactInfo;
