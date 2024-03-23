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
        {acountItems.map((account, index) => (
          <AcountItem
            key={index}
            title={account.title}
            amount={account.amount}
            description={account.description}
          />
        ))}
      </main>
    </>
  );
};

export default User;
