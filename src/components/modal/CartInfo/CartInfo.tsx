import CartCount from "../cartCount/CartCount";
import "./styles.css";

const CartInfo = () => {
  return (
    <div className="cart-info">
      <div>
        <h2>BLACK T-SHIRT</h2>
        <p className="title-item">Unisex Basic Softstyle T-Shirt</p>
      </div>
     <div className="cart-count">
       <CartCount/>
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
          <p className="cart-price">$12,50</p>
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
