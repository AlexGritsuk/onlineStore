import React from "react";
import style from "./basketDetails.module.css";
import BasketProductCounter from "./BasketproductСounter";
import Accordion from "../../components/common/accordion/accordion";
import { useSelector } from "react-redux";
import { getCart } from "../../store/cart";

const BasketDetails = () => {    
  const cartProducts = useSelector(getCart())

  const countPrice = (carts) => {
    let result = [];
    carts.forEach((cartItem) => {
      result.push(cartItem.price);
    });
    return result.reduce((a, b) => a + b, 0);
  };

  let count = countPrice(cartProducts);

  const accordionDiscount = [
    { title: "Скидка", text: "Авторизуйтесь для приминения Вашей скидки" },
  ];

  return (
    <div className={style.basketDetails__wrapper}>
      <div className={style.basketDetails}>
        <div className={style.basketDetails__inner}>
          <div>Детали заказа</div>
          <div className={style.basketDetails__count}>
            <BasketProductCounter />
            <span className={style.separator}></span>
            <div>{count} ₽</div>
          </div>
          <div className={style.basketDetails__item}>
            <Accordion faqList={accordionDiscount} />

            <div>{""}</div>
          </div>
          <div className={style.basketDetails__item}>
            <div>Итого</div>
            <span className={style.separator}></span>
            <div>{count} ₽</div>
          </div>
          <button className={style.basketDetails__btn}>
            Перейти к оформлению
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketDetails;
