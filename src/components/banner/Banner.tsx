import "./style.css";
const Banner = () => {
  return (
    <div className="banner">
      <img src="./header.svg" alt="banner" />
      <div className="banner-text">
          <marquee>A man cant have enough basement swag</marquee>
      </div>
    </div>
  );
};

export default Banner;
