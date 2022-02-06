import { ItemArticle } from "../../../type";
import CartCount from "../cartCount/CartCount";
import "./styles.css";

interface Props {
  item: ItemArticle;
}

const CartInfo = ({ item }:Props) => {
  return (
    <div className="cart-info">
      <div>
        <h2>{item.name}</h2>
        <p className="subtitle-item">Unisex Basic Softstyle T-Shirt</p>
      </div>
     <div className="cart-count">
       <CartCount item={item}/>
       <div className="cart-details">
          <div className="cart-details-size">
            <p>size: </p>
            <ul>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
            </ul>
          </div>
          <p className="cart-price">${item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
