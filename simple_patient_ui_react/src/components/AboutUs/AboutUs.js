import Layout from "../Layout";

const AboutUs = () => {
  return (
    <Layout>
      <section className="content-section">
        <h2>Why Our Patient Management Is The Best</h2>
        <p>Centralized patient care</p>
        <button id="buyNowBtn">Buy Now</button>
      </section>
      <aside className="content-section">
        <h3>Customer Testimonials</h3>
        <p>"This product changed my life!" - Happy Customer</p>
      </aside>
    </Layout>
  );
};

export default AboutUs;
