import PropTypes from "prop-types";

const ButtonFormEdit = ({ text, onClick, className }) => {
  return (
    <div className="buttonEdit">
      <button className={className} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

ButtonFormEdit.propsType = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default ButtonFormEdit;
