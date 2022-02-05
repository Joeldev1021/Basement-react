import "./styles.css";

const CartCount = () => {
  return (
      <div className="cart-action">
          <p>Quantity: </p>
          <div>
            <button className="count-btn">-</button>
            <p>3</p>
            <button className="count-btn">+</button>
          </div>
        </div>

  );
};

export default CartCount;
