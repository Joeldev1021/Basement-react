/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { ItemArticle } from "../../../type";
import "./styles.css";

const CartFooter = () => {
  const { itemCart } = useContext(CartContext);
  const reduce = (accumulator: number, currentValue: ItemArticle) => accumulator + (currentValue.count * currentValue.price);

  const result = itemCart.reduce(reduce, 0);

  return (
    <footer className="cart-footer">
      <p>TOTAL: ${result}</p>
      <button>CHECKOUT</button>
    </footer>
  );
};

export default CartFooter;
