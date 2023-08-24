import { React, useState } from "react";
import Login from "../Modals/Login/Login";
import Routing from "./Router";
import {
  Wrapper,
  Account,
  AccountLine,
  Navbar,
  Logo,
  NavItems,
  NavDropdown,
} from "./Header.styled";
import "./header.css";

import logo from "../../Assets/img-mainpage/logo.svg";
import phone from "../../Assets/img-mainpage/phone.svg";

const Header = () => {
  const DropDown = () => {
    return (
      <NavDropdown>
        <ul>
          <li>
            <img src={phone} alt="img" />
            +7 700 505 3000
          </li>
          <li>с 9:00 до 18:00</li>
        </ul>
      </NavDropdown>
    );
  };

  const [openDropDown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropDown);
  };

  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <Wrapper>
        <div className="container">
          <Navbar>
            <Logo>
              <img src={logo} alt="logo-img" />
              <p>дизайн интерьеров</p>
            </Logo>

            <NavItems>
              <a className="navItem" href="/">
                Главная
              </a>
              <a className="navItem" href="/Test">
                Тест
              </a>
              <a className="navItem" href="/Catalog">
                Каталог
              </a>
              <a className="navItem" href="/About">
                О нас
              </a>
              <a className="navItem" href="/Prices">
                Цены
              </a>
              <span onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                Контакты
                {openDropDown && <DropDown />}
              </span>
            </NavItems>

            <Account>
              {/* MODAL START*/}
              <span
                href="/"
                className="loginBtn"
                onClick={() => setModalActive(true)}>
                Войти
              </span>
              <Login active={modalActive} setActive={setModalActive}/>
              {/* MODAL END*/}
              <AccountLine></AccountLine>
              <span href="/" className="regist">
                Зарегистрироваться
              </span>
            </Account>
            <label class="burger" for="burger">
              <input type="checkbox" id="burger" />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </Navbar>
        </div>
      </Wrapper>
      <Routing />
    </>
  );
};

export default Header;
