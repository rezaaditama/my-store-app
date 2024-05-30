import Avatar from '../Avatar';
import EditIcon from '../../../public/assets/svg/EditIcon';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileCard = ({ className }) => {
  return (
    <div
      className={`${className}
        text-center content-center py-3 space-y-5 bg-gray-800 rounded text-white
      `}
    >
      <div className='flex justify-center'>
        <Avatar className={`w-1/3`} />
      </div>
      <div className='space-y-1'>
        <h1 className='font-bold text-lg'>John Doe</h1>
        <p className='text-base'>Full stack Developer</p>
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
};

export default ProfileCard;
