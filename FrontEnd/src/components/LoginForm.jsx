import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import ButtonFormEdit from "./ButtonFormEdit";
import { useState } from "react";
import { fetchUser, fetchLogin } from "./fetch";

// redux
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userToken, userInfos } from "../redux/slices";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const responseLogin = await fetchLogin(email, password);

      if (responseLogin.status === 200) {
        const token = responseLogin.body.token;
        // envoi du token au store
        dispatch(userToken(token));

        if (rememberMe) {
          localStorage.setItem("token", token);
        }
        // fetch pour la récuperation des infos user
        const responseUser = await fetchUser(token);
        // envoi des infos user au store
        dispatch(userInfos(responseUser.body));

        // redirection vers la page /user si connecté
        navigate("/user");
      }
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la demande de connexion :",
        error
      );
      setErrorLogin(true);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const HandleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon
          icon={faCircleUser}
          className="fa fa-user-circle sign-in-icon"
        />
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="usermail">User Mail:</label>
            <input
              type="text"
              id="usermail"
              value={email}
              onChange={handleEmail}
              placeholder="exemple@gmail.com"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePassword}
              required
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={HandleRememberMe}
            />

            <label htmlFor="remember-me">Remember me</label>
          </div>
          <ButtonFormEdit
            text={"Sign-in"}
            className={"sign-in-button button"}
          />
        </form>
      </section>
      {errorLogin && (
        <p className="errorMessage">
          Veuillez vérifier vos identifiants et réessayer !
        </p>
      )}
    </main>
  );
};

export default LoginForm;
