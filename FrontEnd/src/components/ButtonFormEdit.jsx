import PropTypes from "prop-types";

const ButtonFormEdit = ({ text, onClick }) => {
  return (
    <div className="buttonEdit">
      <button className="sign-in-button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

ButtonFormEdit.propsType = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonFormEdit;
