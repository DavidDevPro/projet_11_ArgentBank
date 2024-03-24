import React, { useState } from "react";
import ButtonFormEdit from "./ButtonFormEdit";

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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSave = async (e) => {
    e.preventDefault();

    // fetch method PUT pour la gestion du changement du user name
    const responseEdit = await fetch(
      "http://localhost:3001/api/v1/user/profile",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName: changeUser }),
      }
    );
    if (responseEdit.ok) {
      const editResult = await editResponse.json();
      console.log("le fetch a réussi statut " + editResult.status);
      // le dispatch va faire boucler le storeUserInfos jusqu'a trouver userName
      dispatch(userInfos({ ...storeUserInfos, userName: changeUser }));
    } else {
      console.log("Le fetch a échoué avec le statut " + editResponse.status);
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
            className={"sign-in-button"}
            type="submit"
          />
        </form>
        <ButtonFormEdit
          text={"Cancel"}
          onClick={handleCancel}
          className={"sign-in-button"}
        />
      </div>
    </section>
  );
};

export default UserFormName;
