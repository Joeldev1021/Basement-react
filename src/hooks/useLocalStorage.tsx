import { useState } from "react";
import { CartItem } from "../type";

interface Props {
    itemCart?: CartItem[];
}
export function useLocalStorage () {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem("cartStorage");
    return item ? JSON.parse(item) : [];
  });

  function setItem ({ itemCart }:Props) {
    localStorage.setItem("cartStorage", JSON.stringify(itemCart));
    setValue(itemCart);
  }

  return { value, setItem };
}
