import React from "react";
import { useSelector } from "react-redux";
import { getCountCart } from "../../store/cart";

const BasketProductCounter = () => {
  const countCart = useSelector(getCountCart());
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
      {countCart > 0
        ? `${
            countCart +
            " " +
            renderPhrase(countCart, "товар", "товара", "товаров")
          }`
        : "Товаров в корзине нет"}
    </div>
  );
};

export default BasketProductCounter;
