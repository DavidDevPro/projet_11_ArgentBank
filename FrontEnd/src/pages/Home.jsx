import HomeBanner from "../components/HomeBanner";
import HomeFeatures from "../components/HomeFeatures";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <main>
        <HomeBanner />
        <HomeFeatures />
      </main>
    </>
  );
};

export default Home;
