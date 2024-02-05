// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../../Assets/img-mainpage/logo.svg";
import phone from "../../Assets/img-mainpage/phone.svg";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footerTop}>
        <div className={styles.logo}>
          <img src={logo} alt="logo-img" />
          <p>дизайн интерьеров</p>
        </div>
        <div className={styles.footerBlock}>
          <ul>
            <Link to="/">
              <li>Главная</li>
            </Link>
            <Link to="/test">
              <li>Тест</li>
            </Link>
            <Link to="/about">
              <li>О нас</li>
            </Link>
            <Link to="/prices">
              <li>Цены</li>
            </Link>
          </ul>
        </div>
        <div className={styles.footerBlock}>
          <ul>
            <Link to="/privacy">
              <li>Политика конфиденциальности</li>
              <li>Условия пользования</li>
            </Link>
          </ul>
        </div>
        <div className={styles.footerBlock}>
          <ul>
            <li>
              <img src={phone} alt="img" /> <p>+7 700 505 30 00</p>
            </li>
            <li>с 9:00 до 18:00</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>(с) 2024. Все права защищены.</p>
      </div>
    </div>
  );
}
