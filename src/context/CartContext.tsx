import { createContext } from "react";
import { CartItem, Product } from "../type";

export type CartContextType = {
    items: Product[];
    itemCart: CartItem[];
    addItemToCart: (item: Product) => void;
    incrementItem: (id: number) => void;
    decrementItem: (item: number) => void;
}

export const CartContext = createContext<CartContextType>({} as CartContextType);
