/* eslint-disable no-unused-vars */
import { useEffect, useReducer } from "react";
import { CartItem, InitialState, Product } from "../type";
import { CartContext } from "./CartContext";
import { data } from "../data";
import { reducerCart } from "./cartReducer";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface Props{
  children :JSX.Element|JSX.Element[]
}

const INITIAL_STATE:InitialState = {
  items: data,
  itemCart: []
};

const ProviderCart = ({ children }:Props) => {
  /// value the localStorage
  const { value, setItem } = useLocalStorage();

  INITIAL_STATE.itemCart = value || INITIAL_STATE.itemCart;
  const [{ items, itemCart }, dispatch] = useReducer(reducerCart, INITIAL_STATE);

  const addItemToCart = (item: Product) => {
    // add count a Product to cart
    const cart:CartItem = { ...item, count: 1 };
    dispatch({ type: "ADD_TO_CART", payload: cart });
  };

  const incrementItem = (id: number) => {
    dispatch({ type: "INCREMENT_COUNT", payload: id });
  };

  const decrementItem = (id: number) => {
    dispatch({ type: "DECREMENT_COUNT", payload: id });
  };

  useEffect(() => {
    // save item to localStorage
    setItem({ itemCart });
  }, [itemCart]);

  return (
    <CartContext.Provider value={{ items, itemCart, addItemToCart, incrementItem, decrementItem }}>
      { children }
    </CartContext.Provider>
  );
};

export default ProviderCart;
