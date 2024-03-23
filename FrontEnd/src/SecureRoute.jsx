import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";

// redux
import { useSelector } from "react-redux";

// on prend l'état actuel de "token" dans le store redux
const SecureRoute = ({ children }) => {
  const token = useSelector((state) => state.Login.token);

  // si token => le composents rend ses enfants
  // sinon redirection vers la page d'authentification
  return token ? children : <Navigate to="/login" />;
};

SecureRoute.propTypes = {
  children: PropTypes.node,
};
export default SecureRoute;
