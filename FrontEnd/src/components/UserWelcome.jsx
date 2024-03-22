import { useSelector } from "react-redux";

const UserWelcome = () => {
  const messageWelcome = useSelector((state) => state.Login.userInfos);
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {messageWelcome.firstName} {messageWelcome.lastName}
      </h1>
      <button className="edit-button">Edit name</button>
    </div>
  );
};

export default UserWelcome;
