import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import ButtonFormEdit from "./ButtonFormEdit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [erreur, setErreur] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response) {
        const result = await response.json();
        const token = result.body.token;
        console.log(token);
        rememberMe
          ? localStorage.setItem("token", token)
          : localStorage.removeItem("token");
        navigate("/user");

        console.log("Connexion réussie statut " + response.status);
      }
    } catch (error) {
      console.error("Le fetch n'a pas réussi, erreur ", error);
      setErreur("erreur de connection");
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
            {console.log(rememberMe)}

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
