const CartInfo = () => {
  return (
    <div className="container-info">
      <h2>BLACK T-SHIRT</h2>
      <p>Unisex Basic Softstyle T-Shirt</p>
      <div className="count">
        <p>Quantity</p>
        <div className="count-container">
          <button className="count-btn">-</button>
          <p>3</p>
          <button className="count-btn">+</button>
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
