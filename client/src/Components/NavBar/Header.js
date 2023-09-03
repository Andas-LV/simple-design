import { React, useState } from "react";
import Login from "../Modals/Login/Login";
import Regist from "../Modals/Registration/Regist";
import Protected from "../Modals/Protected";
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

  const [loginActive, setLoginActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
// BACK
  const [token, setToken] = useState("");

  const handleLogin = (newToken) => {
    setToken(newToken);
  };
// BACK END
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
                onClick={() => setLoginActive(true)}>
                Войти
              </span>
              <Login active={loginActive} setActive={setLoginActive} onLogin={handleLogin}/>
              {token && <Protected token={token} />}
              {/* MODAL END*/}
              <AccountLine></AccountLine>
              {/* MODAL START*/}
              <span
                href="/"
                className="registBtn"
                onClick={() => setModalActive(true)}>
                Зарегистрироваться
              </span>
              <Regist active={modalActive} setActive={setModalActive} />
              {/* MODAL END*/}
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
