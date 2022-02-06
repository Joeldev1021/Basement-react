import { createContext } from "react";
import { ItemArticle } from "../type";

export type CartContextType = {
    items: ItemArticle[];
    itemCart: ItemArticle[] |[];
    addItemToCart: (item: ItemArticle) => void;
    incrementItem: (id: number) => void;
    decrementItem: (item: number) => void;
  /*   removeItemToCart: (id: number) => void;
    clearCart: () => void; */
}

export const CartContext = createContext<CartContextType>({} as CartContextType);
