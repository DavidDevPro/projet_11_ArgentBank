import PropTypes from "prop-types";

const ButtonFormEdit = ({ text, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

ButtonFormEdit.propsType = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default ButtonFormEdit;
