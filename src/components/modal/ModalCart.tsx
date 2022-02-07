import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartFooter from "./cartFooter/CartFooter";
import CartInfo from "./CartInfo/CartInfo";
import CartLogo from "./CartLogo/CartLogo";
import "./styles.css";

interface Props {
  handleModal: () => void;
}

const ModalCart = ({ handleModal }:Props) => {
  const { itemCart } = useContext(CartContext);
  console.log(itemCart, "itemCart");
  return (
    <div className="modal-cart">
      <CartLogo />
      <button className="modal-btn" onClick={() => handleModal()}><img src="./close.png"/></button>
      {itemCart?.map(item => {
        return (
          <div key={item.id}>
            <div className="cart-content" >
              <div className="cart-img">
                <img src={item.img} alt={item.name} />
              </div>
              <CartInfo item={item}/>
            </div>
            <CartFooter />
          </div>
        );
      })}
      {itemCart?.length === 0 && <p className="cart-empty">Your cart is empty</p>}
    </div>
  );
};

export default ModalCart;
