import React, { useState } from "react";
import Login from "../Modals/Login/Login";
import Regist from "../Modals/Registration/Regist";
import Protected from "../Modals/Protected";
import Routing from "./Router";
import Burger from "./Burger/Burger";
import styles from "./Header.module.css";

import logo from "../../Assets/img-mainpage/logo.svg";
import phone from "../../Assets/img-mainpage/phone.svg";

const Header = () => {
  const [openDropDown, setOpenDropdown] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [burgerChecked, setBurgerChecked] = useState(false);
  const [token, setToken] = useState("");

  const DropDown = () =>
    openDropDown && (
      <div className={styles.navDropdown}>
        <ul>
          <li>
            <img src={phone} alt="img" />
            +7 700 505 3000
          </li>
          <li>с 9:00 до 18:00</li>
        </ul>
      </div>
    );

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <div className={styles.logo}>
              <img src={logo} alt="logo-img" />
              <p>дизайн интерьеров</p>
            </div>

            <div className={styles.navItems}>
              <a href={"/"}>Home</a>
              {["Test", "Catalog", "About", "Prices"].map((item) => (
                <a key={item} className={styles.navItem} href={`/${item}`}>
                  {item}
                </a>
              ))}
              <span
                onMouseEnter={() => setOpenDropdown(true)}
                onMouseLeave={() => setOpenDropdown(false)}>
                Contacts
                <DropDown />
              </span>
            </div>

            <div className={styles.account}>
              <span
                href="/"
                className={styles.loginBtn}
                onClick={() => setLoginActive(true)}>
                Войти
              </span>
              <Login
                active={loginActive}
                setActive={setLoginActive}
                onLogin={handleLogin}
              />
              {token && <Protected token={token} />}
              <div className={styles.accountLine}></div>
              <span
                href="/"
                className={styles.registBtn}
                onClick={() => setModalActive(true)}>
                Зарегистрироваться
              </span>
              <Regist active={modalActive} setActive={setModalActive} />
            </div>

            <Burger
              active={burgerChecked}
              onClick={() => setBurgerChecked(!burgerChecked)}
            />

            <label className={styles.burger} htmlFor="burger">
              <input
                type="checkbox"
                id="burger"
                checked={burgerChecked}
                onChange={() => setBurgerChecked(!burgerChecked)}
              />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
      </div>
      <Routing />
    </>
  );
};

export default Header;
