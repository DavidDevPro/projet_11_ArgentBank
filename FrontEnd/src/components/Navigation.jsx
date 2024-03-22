import { NavLink, useNavigate } from "react-router-dom";
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

  const handleLogout = () => {
    dispatch({
      type: "Login/userToken",
      payload: null,
    });
    dispatch({
      type: "Login/userInfos",
      payload: null,
    });
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {token ? (
          loginStore &&
          loginStore.userInfos &&
          loginStore.userInfos.userName && (
            <div className="main-nav-logout">
              <p>{loginStore.userInfos.userName}</p>
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
          <NavLink to="/login" className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
