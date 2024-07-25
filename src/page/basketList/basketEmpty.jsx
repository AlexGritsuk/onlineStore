import React from "react";
import style from "../../style/root__style.module.css";
import { PiShoppingCartFill } from "react-icons/pi";
const BasketEmpty = () => {
  return (
    <div className={style.container}>
      <div style={{padding: "25px" }}>
        <h1>Корзина пуста</h1>
        <div style={{ marginTop: "15px" }}>
          <h2>В корзине пока ничего нет</h2>
        </div>
        <div style={{ marginTop: "15px" }}>
          <h3>
            Добавляйте товары в корзину с помощью <PiShoppingCartFill />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BasketEmpty;
