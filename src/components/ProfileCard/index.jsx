import Avatar from '../Avatar';
import EditIcon from '../../../public/assets/svg/EditIcon';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileCard = ({ className, name }) => {
  return (
    <div
      className={`${className} text-center content-center py-20 space-y-5 bg-gray-800 rounded text-white `}
    >
      <div className='flex justify-center'>
        <Avatar className={`w-1/3`} />
      </div>
      <div className='space-y-1'>
        <h1 className='font-bold text-lg capitalize'>{name}</h1>
        <p className='text-base'>Admin</p>
        <div className='flex justify-center items-center cursor-pointer space-x-1'>
          <EditIcon />
          <Link>Edit</Link>
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default ProfileCard;
