import React from "react";
import { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import style from "./accordion.module.css";

const AccordionItem = ({ isOpen, onClick, faqItem }) => {
  const itemRef = useRef(null);

  return (
    <li className={style.accordion__item}>
      <button onClick={() => onClick()} className={style.accordion__header}>
        <div>{faqItem.title}</div>
        <div>
          <IoIosArrowDown
            style={
              isOpen
                ? { transform: "rotate(180deg)", marginTop: "2px" }
                : { marginTop: "2px" }
            }
          />
        </div>
      </button>
      <div
        className={style.accordion__collapse}
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
        }
      >
        <div ref={itemRef} className={style.accordion__body}>
          {faqItem.text}
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
