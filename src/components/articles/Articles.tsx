import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./styles.css";
const Articles = () => {
  const { items, addItemToCart } = useContext(CartContext);

  return (
      <div className="container-grid">
        {items?.map(item => {
          return (
              <div onClick={() => addItemToCart(item)} className="grid-item" key={item.id}>
                <img src={item.img} alt={item.name} />
                 <div className="item-info">
                   <p>{item.name}</p>
                   <p>${item.price}</p>
                 </div>
              </div>
          );
        })}
    </div>
  );
};

export default Articles;
