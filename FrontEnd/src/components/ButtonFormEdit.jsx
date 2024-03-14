import PropTypes from "prop-types";

const ButtonFormEdit = ({ text }) => {
  return (
    <div className="buttonEdit">
      <button type="submit" className="sign-in-button">
        {text}
      </button>
    </div>
  );
};

ButtonFormEdit.propsType = {
  text: PropTypes.string.isRequired,
};

export default ButtonFormEdit;
