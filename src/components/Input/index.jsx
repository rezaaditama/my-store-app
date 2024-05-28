import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Input = forwardRef(
  ({ label, className, id, placeholder, type, onChange }, ref) => {
    return (
      <div className={`${className}`}>
        <label htmlFor={id} className='block mr-2 mb-1 font-bold'>
          {label}
        </label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className='p-1 rounded border-gray-300 border focus:outline-none focus:border-blue-400 w-full'
          autoComplete={`new-${id}`}
          required
          ref={ref}
          onChange={onChange}
        />
      </div>
    );
  }
);

Input.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Input.displayName = 'input';

export default Input;
