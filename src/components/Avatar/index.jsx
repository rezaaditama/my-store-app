import PropTypes from 'prop-types';

const Avatar = ({ className }) => {
  return (
    <figure className={className}>
      <img
        src='../../../public/assets/img/blank-profile-picture-973460_960_720.webp'
        alt='Foto Profile'
        className='w-full rounded-full'
      />
    </figure>
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
};

export default Avatar;
