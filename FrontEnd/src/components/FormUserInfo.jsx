import React, { useState } from "react";
import ButtonFormEdit from "./ButtonFormEdit";
import { useSelector } from "react-redux";

const FormUserInfo = () => {
  const userInfos = useSelector((state) => state.Login.userInfos);
  const [changeUser, setChangeUser] = useState(userInfos.userName);

  const handleChange = (e) => {
    setChangeUser(e.target.value);
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
              value={userInfos.firstName}
              disabled
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              id="lastname"
              value={userInfos.lastName}
              disabled
            />
          </div>
          <ButtonFormEdit text={"Save"} />
          <ButtonFormEdit text={"Cancel"} />
        </form>
      </div>
    </section>
  );
};

export default FormUserInfo;
