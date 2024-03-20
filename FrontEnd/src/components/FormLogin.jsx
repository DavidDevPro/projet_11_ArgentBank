import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import ButtonFormEdit from "./ButtonFormEdit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { token } from "../redux/slices";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [erreur, setErreur] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storeToken = useSelector((state) => state.Login.token);

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const result = await response.json();
      dispatch(token(result.body.token));

      if (rememberMe) {
        localStorage.setItem("token", storeToken);
      }
      navigate("/user");

      console.log("Connexion réussie statut " + response.status);
    } else {
      console.error("Échec de la requête, erreur status " + response.status);
      setErreur("Erreur de connexion");
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
          <ButtonFormEdit text={"Sign-in"} />
        </form>
      </section>
      {erreur && <p className="errorMessage">{erreur}</p>}
    </main>
  );
};

export default FormLogin;
