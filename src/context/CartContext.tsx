import { createContext } from "react";
import { CartItem } from "../type";

export type CartContextType = {
   item?: CartItem[];
    msg?: string;
    addItem?: (item: CartItem) => void;
    removeItem?: (id: number) => void;
    clearCart?: () => void;
}

export const CartContext = createContext<CartContextType>({} as CartContextType);
