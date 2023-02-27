import "./Home.scss";
import Services from "../../components/services/Services";
import Main from "../../components/Main/Main";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <div className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">crop recommendation</span>
            <span className="heading-primary--sub">
              Enter your farm data to get personalized crop recommendations
              based on your specific conditions.
            </span>
          </h1>
          <button className="btn">Get Started</button>
        </div>
      </div>
      <Main />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
