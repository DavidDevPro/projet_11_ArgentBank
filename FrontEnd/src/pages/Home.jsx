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
              key={"feature" + index}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
              alt={feature.alt}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
