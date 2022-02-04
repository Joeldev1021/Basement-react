import BtnCart from "../cart/BtnCart";
import "./header.css";

const Header = () => {
  return (
      <header className='header'>
          <h1 className="header-title">Basement</h1>
         <BtnCart/>
     </header>
  );
};

export default Header;
