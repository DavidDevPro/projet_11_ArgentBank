import React, { useState } from "react";
import ButtonFormEdit from "./ButtonFormEdit";
import { fetchEdit } from "./fetch";

// redux
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userInfos } from "../redux/slices";

const UserFormName = () => {
  const token = useSelector((state) => state.Login.token);
  // console.log(token);
  const storeUserInfos = useSelector((state) => state.Login.userInfos);
  // console.log(userInfos);
  const [changeUser, setChangeUser] = useState(storeUserInfos.userName);
  // console.log(changeUser);
  const [userError, setUserError] = useState(false);
  const [userSuccess, setUserSuccess] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const responseEdit = await fetchEdit(token, changeUser);
      if (responseEdit.ok) {
        dispatch(userInfos({ ...storeUserInfos, userName: changeUser }));
        setUserSuccess(true);
        setTimeout(() => setUserSuccess(false), 4500);
      } else {
        console.log("Le fetch a échoué avec le statut " + responseEdit.status);
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la sauvegarde :", error);
      setUserError(true);
      setTimeout(() => setUserError(false), 4500);
    }
  };

  const handleChange = (e) => {
    setChangeUser(e.target.value);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/user");
  };

  return (
    <div>
      <section className="sign-in-content">
        <div className="form-user">
          <h2>Edit user info</h2>
          <form className="form-user-infos " action="">
            <div className="input-wrapper">
              <label htmlFor="username">User Name:</label>
              <input
                type="text"
                id="username"
                placeholder="User Name..."
                value={changeUser}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="firstname">First Name:</label>
              <input
                type="text"
                id="firstname"
                value={storeUserInfos.firstName}
                disabled
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                id="lastname"
                value={storeUserInfos.lastName}
                disabled
              />
            </div>
            <ButtonFormEdit
              text={"Save"}
              onClick={handleSave}
              className={"sign-in-button button"}
              type="submit"
            />
          </form>
          <ButtonFormEdit
            text={"Cancel"}
            onClick={handleCancel}
            className={"sign-in-button button"}
          />
        </div>
      </section>
      {userError && (
        <p className="errorMessage">
          Votre édition du User Name n'a pas fonctionné !
        </p>
      )}
      {userSuccess && (
        <p className="successMessage">
          Votre édition du User Name a fonctionné !
        </p>
      )}
    </div>
  );
};

export default UserFormName;
