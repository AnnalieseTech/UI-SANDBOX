import HeroImage from "./HeroImage/HeroImage";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <HeroImage></HeroImage>
      <h1>Welcome to the Home Page!</h1>
      <p>This is some content specific to the Home Page.</p>
    </Layout>
  );
};

export default Home;
