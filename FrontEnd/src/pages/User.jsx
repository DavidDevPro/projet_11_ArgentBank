import Navigation from "../components/Navigation";
import UserWelcome from "../components/UserWelcome";
import UserAccountInfos from "../components/UserAccountInfos";

const User = () => {
  return (
    <>
      <Navigation />
      <main className="main bg-dark">
        <UserWelcome />
        <UserAccountInfos />
      </main>
    </>
  );
};

export default User;
