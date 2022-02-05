import CartFooter from "./cartFooter/CartFooter";
import CartInfo from "./CartInfo/CartInfo";
import CartLogo from "./CartLogo/CartLogo";
import "./styles.css";

const ModalCart = ({ handleModal }) => {
  return (
    <div className="modal-cart">
      <button className="modal-btn" onClick={() => handleModal()}>close</button>
      <CartLogo />
      <div className="cart-content">
        <div className="cart-img">
          <img src="./shirt.png" alt="" />
        </div>
        <CartInfo />
      </div>
      <CartFooter/>
    </div>
  );
};

export default ModalCart;
