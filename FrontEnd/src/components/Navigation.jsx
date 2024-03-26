import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/images/argentBankLogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

// redux
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
  const token = useSelector((state) => state.Login.token);
  const loginStore = useSelector((state) => state.Login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Logique de déconnection de l'utilisateur
  const handleLogout = () => {
    // payload de userToken mis à "null" dans le store
    dispatch({
      type: "Login/userToken",
      payload: null,
    });
    // Payload de userInfos mis à nul dans le store
    dispatch({
      type: "Login/userInfos",
      payload: null,
    });
    // on enléve la clé et la valeur du token dans le localStorage
    // et on redirige vers la page d'accueil
    localStorage.removeItem("token", token);
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {token ? (
          loginStore &&
          loginStore.userInfos &&
          loginStore.userInfos.userName && (
            <div className="main-nav-logout">
              <Link to="/user" className="user-name">
                <FontAwesomeIcon icon={faCircleUser} />
                <p className="user-name-text">
                  {loginStore.userInfos.userName}
                </p>
              </Link>
              <p className="logout" onClick={handleLogout}>
                <FontAwesomeIcon
                  className="icon-logout"
                  icon={faRightFromBracket}
                />
                Sign Out
              </p>
            </div>
          )
        ) : (
          <Link to="/login" className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
