import { useNavigate } from "react-router-dom";
import ButtonFormEdit from "./ButtonFormEdit";

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
      <ButtonFormEdit
        className={"edit-button"}
        text={"Edit name"}
        onClick={handleUserEdit}
      />
    </div>
  );
};

export default UserWelcome;
