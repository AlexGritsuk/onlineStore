import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import style from "../../style/navBar.module.css";
import root from "../../style/root__style.module.css";
import { SlBasket } from "react-icons/sl";
import { CiLogin } from "react-icons/ci";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { RiMacbookLine } from "react-icons/ri";
import { IoWatchOutline } from "react-icons/io5";
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

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);
  useClickOutSide(menuRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 150);
  });

  const widthHeight = {
    width: "25px",
    height: "25px",
  }; 

  const countCart = useSelector(getCountCart());
  const countHeart = useSelector(getCountHeart())
  const countCompare = useSelector(getCountCompare())

  const icons = {
    cart: {
      icon: <SlBasket style={widthHeight} />,
      name: "Корзина",
    },
    login: {
      icon: <CiLogin style={widthHeight} />,
      name: "Вход",
    },
    iPhones: {
      icon: <MdOutlinePhoneIphone style={widthHeight} />,
      name: "iPhones",
    },
    airPods: {
      icon: <SlEarphones style={widthHeight} />,
      name: "AirPods",
    },
    macBook: {
      icon: <RiMacbookLine />,
      name: "MacBooks",
    },
    main: {
      icon: <ImAppleinc style={widthHeight} />,
      name: "AppleStore",
    },
    heart: {
      icon: <FaRegHeart style={widthHeight} />,
      name: "Избранное",
    },
    comparison: {
      icon: <IoIosGitCompare style={widthHeight} />,
      name: "Сравнение",
    },
  };

  return (
    <div className={root.container}>
      <nav className={style.navBar}>
        <div className={style.navBar__inner}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <ul>
                <li>
                  <Link to="/">
                    <MenuLink items={icons.main} />
                  </Link>
                </li>
              </ul>
            </div>

            <div style={{ marginLeft: "20px" }}>
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

              <nav
                className={style.menu + " " + (isOpen ? style.active : "")}
                ref={menuRef}
              >
                <ul className={style.menu__list}>
                  <Link to="/Iphones">
                    <li className={style.menu__item}>
                      <MdOutlinePhoneIphone style={{ marginRight: "10px" }} />
                      <span>iPhones</span>
                    </li>
                  </Link>
                  <Link to="/Airpods">
                    <li className={style.menu__item}>
                      <SlEarphones style={{ marginRight: "10px" }} />
                      <span>AirPods</span>
                    </li>
                  </Link>
                  <Link to="/MacBooks">
                    <li className={style.menu__item}>
                      <RiMacbookLine style={{ marginRight: "10px" }} />
                      <span>MacBooks</span>
                    </li>
                  </Link>
                  <Link to="/Airpods">
                    <li className={style.menu__item}>
                      <IoWatchOutline style={{ marginRight: "10px" }} />
                      <span>Apple Watch</span>
                    </li>
                  </Link>
                </ul>
              </nav>
            </div>
          </div>

          <div>
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
