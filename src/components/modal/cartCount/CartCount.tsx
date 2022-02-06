import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { ItemArticle } from "../../../type";
import "./styles.css";

interface Props {
  item: ItemArticle;
}

const CartCount = ({ item }: Props) => {
  const { incrementItem, decrementItem } = useContext(CartContext);
  return (
      <div className="cart-action">
          <p>Quantity: </p>
          <div>
            <button onClick={() => decrementItem(item.id)} className="count-btn">-</button>
            <p>{item.count}</p>
            <button onClick={() => incrementItem(item.id)} className="count-btn">+</button>
          </div>
        </div>
  );
};

export default CartCount;
