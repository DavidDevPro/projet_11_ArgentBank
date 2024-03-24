import { PropTypes } from "prop-types";

const HomeFeatures = ({ title, icon, description }) => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <div className="feature-item">
        <img className="feature-icon" src={icon} alt="Chat icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
};

HomeFeatures.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default HomeFeatures;
