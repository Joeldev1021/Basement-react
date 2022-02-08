import Marquee from "react-fast-marquee";
import "./style.css";
const Banner = () => {
  return (
    <div className="banner">
      <img src="./header.svg" alt="banner" />
      <div className="banner-text">
          <Marquee gradient={false}>A man cant have enough basement swag</Marquee>
      </div>
    </div>
  );
};

export default Banner;
