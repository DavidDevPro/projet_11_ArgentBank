import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import ButtonFormEdit from "./ButtonFormEdit";
import { useState } from "react";

// redux
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userToken, userInfos } from "../redux/slices";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [erreur, setErreur] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginResponse = await fetch(
      "http://localhost:3001/api/v1/user/login",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    if (loginResponse) {
      // vérification et récupération de la data en json
      // récupération du status, du message de l'api et du token
      const loginData = await loginResponse.json();
      // console.log(loginData.message + ", status " + loginData.status);
      // récuperation l'objet du dispatch et alimentation du store de la valeur du token
      const dispatchToken = dispatch(userToken(loginData.body.token));
      // déclaration d'une variable token
      const token = dispatchToken.payload;
      // console.log(token);

      if (rememberMe) {
        localStorage.setItem("token", token);
      }

      const profileResponse = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (profileResponse) {
        const profileData = await profileResponse.json();
        // console.log(profileData);
        dispatch(userInfos(profileData.body));
      } else {
        console.error("la connection n'a pas réussie");
        setErreur("erreur d'identification");
      }
      navigate("/user");
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

export default LoginForm;
