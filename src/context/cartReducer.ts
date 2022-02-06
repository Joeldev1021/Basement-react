/* eslint-disable no-unused-vars */
import { ItemArticle } from "../type";

interface CartState {
    items: ItemArticle[];
    itemCart: ItemArticle[];
}

type CartAction =
| { type: "ADD_TO_CART", payload: ItemArticle }
| { type: "REMOVE_FROM_CART", payload: number }
| {type: "INCREMENT_COUNT", payload: number}
| {type: "DECREMENT_COUNT", payload: number}
| { type: "CLEAR_CART" };

export function reducerCart (state:CartState, action:CartAction) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART": return {
      ...state,
      itemCart: state.itemCart.find(item => item.id === action.payload.id) ? state.itemCart.map(item => item.id === action.payload.id ? { ...item, count: item.count ? item.count + 1 : 1 } : item) : [...state.itemCart, { ...action.payload, count: 1 }]
    };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        itemCart: state.itemCart.filter(item => item.id !== action.payload)
      };
    case "INCREMENT_COUNT":
      return {
        ...state,
        itemCart: state.itemCart.map(item => item.id === action.payload ? { ...item, count: item.count ? item.count++ : 1 } : item)
      };
    case "DECREMENT_COUNT":
      return {
        ...state,
        itemCart: state.itemCart.map(item => item.id === action.payload ? { ...item, count: item.count ? item.count-- : 1 } : item)
      };
    case "CLEAR_CART":
      return {
        ...state,
        itemCart: []
      };
    default:
      return state;
  }
};
