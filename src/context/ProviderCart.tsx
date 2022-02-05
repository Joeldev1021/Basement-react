/* eslint-disable no-unused-vars */
import { Children, useState } from "react";
import { CartItem } from "../type";
import { CartContext } from "./CartContext";
import { data } from "../data";

interface Props{
  children :JSX.Element|JSX.Element[]
}

const ProviderCart = ({ children }:Props) => {
  const [item, setItem] = useState<CartItem[]>(data);

  return (
    <CartContext.Provider value={{ item }}>
      { children }
    </CartContext.Provider>
  );
};

export default ProviderCart;
