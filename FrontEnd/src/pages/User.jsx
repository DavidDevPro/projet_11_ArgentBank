import AcountItem from "../components/AcountItem";
import Navigation from "../components/Navigation";
import UserWelcome from "../components/UserWelcome";
import acountItems from "../acount.json";

const User = () => {
  return (
    <>
      <Navigation />
      <main className="main bg-dark">
        <UserWelcome />
        <h2 className="sr-only">Accounts</h2>
        {acountItems.map((item, index) => (
          <AcountItem
            key={index}
            title={item.title}
            amount={item.amount}
            description={item.description}
          />
        ))}
      </main>
    </>
  );
};

export default User;
