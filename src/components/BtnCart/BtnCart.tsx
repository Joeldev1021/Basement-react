import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./styles.css";
type BtnCartProps = {
  handleModal: () => void;
}
const BtnCart = ({ handleModal }:BtnCartProps) => {
  const { itemCart } = useContext(CartContext);
  return (
        <button onClick={() => handleModal()} className="btn-cart">
          Cart ({itemCart.length})
        </button>
  );
};

export default BtnCart;
