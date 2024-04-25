import PropTypes from 'prop-types';

const Button = ({ children, className, onClick, type }) => {
  return (
    <button
      className={`${className} px-4 rounded font-bold `}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
