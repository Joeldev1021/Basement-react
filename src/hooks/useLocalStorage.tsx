import { useState } from "react";
import { ItemArticle } from "../type";

interface Props {
    itemCart?: ItemArticle[];
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
