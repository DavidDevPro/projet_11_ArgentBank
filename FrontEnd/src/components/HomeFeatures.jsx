import chatImg from "../assets/images/icon-chat.webp";
import moneyImg from "../assets/images/icon-money.webp";
import securityImg from "../assets/images/icon-security.webp";

const HomeFeatures = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <div className="feature-item">
        <img className="feature-icon" src={chatImg} alt="Chat icon" />
        <h3 className="feature-item-title">You are our #1 priority</h3>
        <p>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </p>
      </div>
      <div className="feature-item">
        <img className="feature-icon" src={moneyImg} alt="money icon" />
        <h3 className="feature-item-title">More savings means higher rates</h3>
        <p>The more you save with us, the higher your interest rate will be!</p>
      </div>
      <div className="feature-item">
        <img className="feature-icon" src={securityImg} alt="security icon" />
        <h3 className="feature-item-title">Security you can trust</h3>
        <p>
          We use top of the line encryption to make sure your data and money is
          always safe.
        </p>
      </div>
    </section>
  );
};

export default HomeFeatures;
