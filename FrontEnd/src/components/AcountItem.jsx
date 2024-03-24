import { PropTypes } from "prop-types";
import ButtonFormEdit from "./ButtonFormEdit";

const AcountItem = ({ title, amount, description }) => {
  return (
    <div>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <ButtonFormEdit
            className={"transaction-button button"}
            text={"View transactions"}
          />
        </div>
      </section>
    </div>
  );
};

AcountItem.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AcountItem;
