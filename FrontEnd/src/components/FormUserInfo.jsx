import React from "react";

const FormUserInfo = () => {
  return (
    <section className="sign-in-content">
      <div className="form-user">
        <h2>Edit user info</h2>
        <form className="form-user-infos " action="">
          <div className="input-wrapper">
            <label htmlFor="username">User Name:</label>
            <input type="text" id="username" placeholder="User Name..." />
          </div>
          <div className="input-wrapper">
            <label htmlFor="firstname">First Name:</label>
            <input type="text" id="firstname" placeholder="First Name..." />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" id="lastname" placeholder="Last Name..." />
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormUserInfo;
