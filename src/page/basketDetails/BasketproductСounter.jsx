import React from "react";
import { useIphone } from "../../hooks/useIphone";

const BasketProductCounter = () => {
  const { countItemCart } = useIphone();

  const renderPhrase = (number, one, two, five) => {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  };

  return (
    <div>
      {countItemCart > 0
        ? `${countItemCart + " " + renderPhrase(countItemCart, "товар", "товара", "товаров")}`
        : "Товаров в корзине нет"}
    </div>
  );
};

export default BasketProductCounter;
