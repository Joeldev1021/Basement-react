import Articles from "../components/articles/Articles";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "./styles.css";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Articles />
      <Footer />
    </div>
  );
};

export default Home;
