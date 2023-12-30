import React from "react";
import { Link } from "react-router-dom";
import style from "../../style/navBar.module.css";
import root from "../../style/root__style.module.css";
import { SlBasket } from "react-icons/sl";
import { CiLogin } from "react-icons/ci";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { ImAppleinc } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa";
import MenuLink from "./menuLink/MenuLink";
import { useIphone } from "../../hooks/useIphone";
import CountItem from "../common/countCart/countItem";
import { IoIosGitCompare } from "react-icons/io";
import { useCompare } from "../../hooks/useCompare";

const NavBar = () => {
  const widthHeight = {
    width: "25px",
    height: "25px",
  };

  const { countItemCart, countItemHeart } = useIphone();
  const { countItemCompare } = useCompare();

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
      <nav>
        <div className={style.navBar__inner}>
          <div>
            <ul>
              <li>
                <Link to="/">
                  <MenuLink items={icons.main} />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className={style.navBar__ul}>
              <li>
                <Link to="/Iphones">
                  <MenuLink items={icons.iPhones} />
                </Link>
              </li>
              <li>
                <Link to="/Airpods">
                  <MenuLink items={icons.airPods} />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className={style.navBar__ul}>
              <li>
                <Link to="/Comparison">
                  <div className={style.navBar__cart_relative}>
                    <CountItem count={countItemCompare} />
                    <MenuLink items={icons.comparison} />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Basket">
                  <div className={style.navBar__cart_relative}>
                    <CountItem count={countItemCart} />
                    <MenuLink items={icons.cart} />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Heart">
                  <div className={style.navBar__cart_relative}>
                    <CountItem count={countItemHeart} />
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
