import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./styles.css";
const Articles = () => {
  const { item } = useContext(CartContext);
  return (
      <div className="container-grid">
        {item?.map(item => {
          return (
              <div className="grid-item" key={item.id}>
                <img src={item.img} alt={item.name} />
              </div>
          );
        })}
    </div>
  );
};

export default Articles;
