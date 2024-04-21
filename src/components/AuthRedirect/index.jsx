import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthRedirect = ({ type }) => {
  return (
    <div>
      {type === 'register' ? (
        <p className='text-center'>
          Already have an account?{' '}
          <Link to='/' className='text-blue-700 font-bold'>
            Click Here
          </Link>
        </p>
      ) : (
        <p className='text-center'>
          Already have an account?{' '}
          <Link to='/register' className='text-blue-700 font-bold'>
            Click Here
          </Link>
        </p>
      )}
    </div>
  );
};

AuthRedirect.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AuthRedirect;
