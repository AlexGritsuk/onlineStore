import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import style from "../../style/navBar.module.css";
import root from "../../style/root__style.module.css";
import { SlBasket } from "react-icons/sl";
import { CiLogin } from "react-icons/ci";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { RiMacbookLine } from "react-icons/ri";
import { SlEarphones } from "react-icons/sl";
import { ImAppleinc } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa";
import MenuLink from "./menuLink/MenuLink";
import CountItem from "../common/countCart/countItem";
import { IoIosGitCompare } from "react-icons/io";
import { MdManageSearch } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useClickOutSide } from "../../hooks/useClickOutSide";
import { useSelector } from "react-redux";
import { getCountCart } from "../../store/cart";
import { getCountHeart } from "../../store/heart";
import { getCountCompare } from "../../store/compare";
import Catalog from "./catalog/catalog";
import { getCountCompareAirPods } from "../../store/compareAirPods";
import { getCountCompareMacBooks } from "../../store/compareMacBooks";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);

  useClickOutSide(menuRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 150);
  });

  const countCart = useSelector(getCountCart());
  const countHeart = useSelector(getCountHeart());
  const countCompareIphone = useSelector(getCountCompare());
  const countCompareAirPods = useSelector(getCountCompareAirPods());
  const countCompareMacBooks = useSelector(getCountCompareMacBooks());
  const countCompare =
    countCompareIphone + countCompareAirPods + countCompareMacBooks;

  const icons = {
    cart: {
      icon: <SlBasket className={style.navBar__icon} />,
      name: "Корзина",
    },
    login: {
      icon: <CiLogin className={style.navBar__icon} />,
      name: "Вход",
    },
    iPhones: {
      icon: <MdOutlinePhoneIphone className={style.navBar__icon} />,
      name: "iPhones",
    },
    airPods: {
      icon: <SlEarphones className={style.navBar__icon} />,
      name: "AirPods",
    },
    macBook: {
      icon: <RiMacbookLine />,
      name: "MacBooks",
    },
    main: {
      icon: <ImAppleinc className={style.navBar__icon} />,
      name: "AppleStore",
    },
    heart: {
      icon: <FaRegHeart className={style.navBar__icon} />,
      name: "Избранное",
    },
    comparison: {
      icon: <IoIosGitCompare className={style.navBar__icon} />,
      name: "Сравнение",
    },
  };

  return (
    <div className={root.container}>
      <nav className={style.navBar}>
        <div className={style.navBar__inner}>
          <div className={style.navBar__main}>
            <div className={style.navBar__emblem}>
              <ul>
                <li>
                  <Link to="/">
                    <MenuLink items={icons.main} />
                  </Link>
                </li>
              </ul>
            </div>

            <div className={style.navBar__catalog}>
              <button
                className={style.menu__button}
                onClick={() => setOpen(!isOpen)}
              >
                {!isOpen ? (
                  <MdManageSearch style={{ height: "25px", width: "25px" }} />
                ) : (
                  <RxCross2 style={{ height: "25px", width: "25px" }} />
                )}
                <span>Каталог</span>
              </button>
              <Catalog isOpen={isOpen} menuRef={menuRef} />
            </div>
          </div>

          <div className={style.navBar__menu}>
            <ul className={style.navBar__ul}>
              <li>
                <Link to="/Comparison">
                  <div className={style.navBar__cart_relative}>
                    <CountItem count={countCompare} />
                    <MenuLink items={icons.comparison} />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Basket">
                  <div className={style.navBar__cart_relative}>
                    <CountItem count={countCart} />
                    <MenuLink items={icons.cart} />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Heart">
                  <div className={style.navBar__cart_relative}>
                    <CountItem count={countHeart} />
                    <MenuLink items={icons.heart} />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Login">
                  <MenuLink items={icons.login} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
