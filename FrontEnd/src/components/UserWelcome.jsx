import { useNavigate } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

const UserWelcome = () => {
  const messageWelcome = useSelector((state) => state.Login.userInfos);
  const navigate = useNavigate();

  const handleUserEdit = () => {
    navigate("/user_edit");
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {messageWelcome.firstName} {messageWelcome.lastName}
      </h1>
      <button className="edit-button" onClick={handleUserEdit}>
        Edit name
      </button>
    </div>
  );
};

export default UserWelcome;
