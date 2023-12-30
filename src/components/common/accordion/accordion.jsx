import React from "react";
import style from "./accordion.module.css";
import AccordionItem from "./accordionItem";
import { useState } from "react";

const Accordion = ({ faqList }) => {
  const [openId, setOpenId] = useState(null); 

  return (
    <ul className={style.accordion}>
      {faqList.map((item, id) => (
        <AccordionItem
          key={id}
          faqItem={item}
          onClick={() => (id === openId ? setOpenId(null) : setOpenId(id))}
          isOpen={id === openId}
        />
      ))}
    </ul>
  );
};

export default Accordion;
