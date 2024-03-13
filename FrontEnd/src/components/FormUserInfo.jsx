import React from "react";

const FormUserInfo = () => {
  return (
    <div className="form-user">
      <h2>Edit user info</h2>
      <form className="form-user-infos " action="">
        <label htmlFor="username">User Name:</label>
        <input type="text" id="username" placeholder="User Name..." />
        <label htmlFor="firstname">First Name:</label>
        <input type="text" id="firstname" placeholder="First Name..." />
        <label htmlFor="lastname">Last Name:</label>
        <input type="text" id="lastname" placeholder="Last Name..." />
      </form>
    </div>
  );
};

export default FormUserInfo;
