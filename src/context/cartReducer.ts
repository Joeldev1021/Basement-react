import { CartItem } from "../type";

type CartAction =
    | { type: "ADD_TO_CART", payload: CartItem }
    | { type: "REMOVE_FROM_CART", payload: { id: string } }
    | { type: "CLEAR_CART" };

export const reducerCart = (state:CartItem[], action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    default:
      return state;
  }
};
