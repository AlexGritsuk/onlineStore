import React from "react";
import root from "../style/root__style.module.css";
import BasketList from "../page/basketList/basketList";
import BasketDetails from "../page/basketDetails/basketDetails";
import style from "../style/basket.module.css";
import { useCart } from "../hooks/useCart";

const Basket = () => {
  const { countCart } = useCart();

  return (
    <div className={root.container}>
      <div style={{ display: "flex" }}>
        <h1>Корзина</h1>
        <h2 style={{ marginLeft: "8px", color: "#8e8e93" }}>{countCart}</h2>
      </div>
      <div className={style.basket}>
        <div className={style.basket__info}>
          <BasketList />
        </div>

        <div className={style.basket__details}>
          <BasketDetails />
        </div>
      </div>
    </div>
  );
};

export default Basket;
