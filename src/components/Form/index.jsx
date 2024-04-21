import PropTypes from 'prop-types';

const Form = ({ children, action, className, onSubmit }) => {
  return (
    <form
      action={action}
      onSubmit={onSubmit}
      className={`max-w-sm w-4/5 p-10 border mx-auto rounded-md shadow-md text-gray-700 ${className}`}
    >
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.array.isRequired,
  action: PropTypes.string,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Form;
