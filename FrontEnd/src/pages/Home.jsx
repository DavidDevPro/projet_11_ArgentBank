import Navigation from "../components/Navigation";
import HomeBanner from "../components/HomeBanner";
import HomeFeatures from "../components/HomeFeatures";
import features from "../data/features.json";

const Home = () => {
  return (
    <>
      <Navigation />
      <main>
        <HomeBanner />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {features.map((feature, index) => (
            <HomeFeatures
              key={index}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
