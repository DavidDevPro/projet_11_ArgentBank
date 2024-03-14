import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import ButtonFormEdit from "./ButtonFormEdit";
import { loginUser, profileUser } from "../redux/slices/loginSlice";
import { useDispatch } from "react-redux";

const FormLogin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remenberMe, setRemenberMe] = useState(false);
  const [erreur, setErreur] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const token = await dispatch(
        loginUser({
          email: email, // valeur de credentials
          password,
        })
      ).unwrap();
      if (remenberMe) {
        localStorage.setItem("token", token);
      }
      await dispatch(profileUser()).unwrap();
      navigate("/user");
    } catch (error) {
      console.error("erreur de connection", error);
      setErreur("erreur de connection");
    }
  };
  const handleRemenberMe = (e) => {
    setRemenberMe(e.target.checked);
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={remenberMe}
              onChange={handleRemenberMe}
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
