/* eslint-disable no-unused-vars */
import { useEffect, useReducer } from "react";
import { ItemArticle } from "../type";
import { CartContext } from "./CartContext";
import { data } from "../data";
import { reducerCart } from "./cartReducer";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface Props{
  children :JSX.Element|JSX.Element[]
}

const INITIAL_STATE = {
  items: data,
  itemCart: []
};

const ProviderCart = ({ children }:Props) => {
  const { value, setItem } = useLocalStorage();
  /// value the localStorage

  const [{ items, itemCart }, dispatch] = useReducer(reducerCart, INITIAL_STATE);

  const addItemToCart = (item: ItemArticle) => {
    dispatch({ type: "ADD_TO_CART", payload: { ...item, count: 1 } });
  };

  const incrementItem = (id: number) => {
    dispatch({ type: "INCREMENT_COUNT", payload: id });
  };

  const decrementItem = (id: number) => {
    dispatch({ type: "DECREMENT_COUNT", payload: id });
  };

  return (
    <CartContext.Provider value={{ items, itemCart, addItemToCart, incrementItem, decrementItem }}>
      { children }
    </CartContext.Provider>
  );
};

export default ProviderCart;
