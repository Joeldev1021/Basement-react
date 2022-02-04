import CartInfo from "./CartInfo/CartInfo";
import CartLogo from "./CartLogo/CartLogo";
import "./styles.css";

const ModalCart = () => {
  return (
    <div className="modal-cart">
      <span>close</span>
      <CartLogo />
      <div className="container-item">
        <img src="" alt="" />
        <CartInfo />
        <div>
          <p>Size</p>
          <ul>
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
          </ul>
        </div>
        <p>$12,50</p>
      </div>
    </div>
  );
};

export default ModalCart;
