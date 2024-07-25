import React from "react";
import root from "../style/root__style.module.css";
import BasketList from "../page/basketList/basketList";
import BasketDetails from "../page/basketDetails/basketDetails";
import style from "../style/basket.module.css";
import { useSelector } from "react-redux";
import { getCountCart } from "../store/cart";
import BasketEmpty from "../page/basketList/basketEmpty";

const Basket = () => {
  const countCart = useSelector(getCountCart());
  return (
    <>
      {countCart > 0 ? (
        <div className={root.container}>
          <div className={style.basket__wrapper}>
            <div className={style.basket__head}>
              <h1>Корзина</h1>
              <h2 className={style.basket__count}>{countCart}</h2>
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
        </div>
      ) : (
        <BasketEmpty />
      )}
    </>
  );
};

export default Basket;
