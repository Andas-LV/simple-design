import React from "react";
import "./basket.css";
import close from "../../../Assets/img-mainpage/close.svg";
import ToggleCheckBox from "./toggleCheckBox";
import { Link } from "react-router-dom";

const Basket = ({ active, setActive }) => {
  return (
    <div
      className={active ? "busket active" : "busket"}
      onClick={() => setActive(true)}>
      <div className="busket-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="closer">
          <p>Закрыть</p>
          <img
            src={close}
            alt="img"
            className="close"
            onClick={() => setActive(false)}
          />
        </div>
        <h1>Ваш заказ:</h1>
        <div className="busket-content">
          <div className="bill-list">
            <div className="bill-list-items">
              <div className="bill-list-item">
                <ToggleCheckBox />
                <div className="bill-name">
                  <h3>Планировка</h3>
                  <ul>
                    <li>2 варианта планировки + финальный</li>
                    <li>план демонтажа стен</li>
                    <li>план монтажа перегородок</li>
                  </ul>
                </div>
                <p>99 000 тг</p>
              </div>

              <div className="bill-list-item">
                <ToggleCheckBox />
                <div className="bill-name">
                  <h3>Дизайн-проект</h3>
                  <ul>
                    <li>2 варианта планировки + финальный</li>
                    <li> планы демонтажа и монтажа стен</li>
                    <li>розетки, выключатели, освещение</li>
                    <li>сантехника</li>
                    <li>план потолка</li>
                    <li>план пола и плинтусов</li>
                    <li>план дверей</li>
                  </ul>
                </div>
                <p>199 000 тг</p>
              </div>
            </div>
            <div className="bill-list-extraServise">
              <h1>Дополнительные услуги</h1>
              <div className="eS-block">
                <ToggleCheckBox />
                <div className="eS-block-text">
                  <p>Тендер строительных бригад</p>
                  <p>+ 49 000 тг</p>
                </div>
              </div>

              <div className="eS-block">
                <ToggleCheckBox />
                <div className="eS-block-text">
                  <p>Составление сметы</p>
                  <p>+ 49 000 тг</p>
                </div>
              </div>

              <div className="eS-block">
                <ToggleCheckBox />
                <div className="eS-block-text">
                  <p>Печать альбома</p>
                  <number>+ 19 000 тг</number>
                </div>
              </div>
            </div>
          </div>
          <div className="bill">
            <h3>Ваш заказ:</h3>
            <div className="bill-block">
              <ToggleCheckBox />
              <div className="bill-block-text">
                <p>Замеры</p>
                <number>19 000 тг</number>
              </div>
            </div>
            <div className="bill-block">
              <ToggleCheckBox />
              <div className="bill-block-text">
                <p>Планировка</p>
                <number>199 000 тг</number>
              </div>
            </div>

            <div className="bill-block">
              <ToggleCheckBox />
              <div className="bill-block-text">
                <p>Выбранные комнаты</p>
                <number>100 000 тг</number>
              </div>
            </div>
            <div className="bill-block">
              <ToggleCheckBox />
              <div className="bill-block-text">
                <p>Тендер строительных бригад</p>
                <number>49 000 тг</number>
              </div>
            </div>
            <div className="bill-block-general">
              <p>Итого:</p>
              <number>367 000 тг</number>
            </div>
            <div className="basket-request">
              <Link to="/request">
                <button className="basket-request-btn">Оставить заявку</button>
              </Link>
              <Link to="/">
                <button className="pay-btn">Оставить заявку</button>
              </Link>
              <Link to="/">
                <button className="kaspi-pay-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="38"
                    viewBox="0 0 34 38"
                    fill="none">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.7942 20.1381C20.837 20.6572 21.2483 22.6467 21.4943 24.4985L21.5353 24.8142L21.5632 25.0291L21.7113 26.1188C22.0012 28.1995 22.606 32.5185 22.606 34.7722C22.606 35.3355 22.5611 35.7678 22.4792 36.0053C22.3427 36.3714 21.9449 36.7227 21.3956 37.0155C20.0665 37.3771 18.6773 37.5726 17.2463 37.5726C17.0948 37.5726 16.9457 37.5644 16.7961 37.5595C16.2178 37.378 15.7831 37.075 15.553 36.6608C14.8581 35.4108 14.8162 32.6259 14.8023 29.3714L14.8007 28.9939L14.7951 28.0184C14.7725 24.5732 14.753 21.6026 15.8858 20.5366C16.3245 20.1266 16.9478 19.9908 17.7942 20.1381ZM11.1602 27.6391C11.8196 27.5981 12.2436 31.1822 12.3288 33.9C12.3885 35.7921 12.2088 36.5704 11.9217 36.8499C11.5967 36.73 11.2773 36.6002 10.9626 36.4593C10.7526 36.0377 10.5921 35.3746 10.4902 34.5059C10.1789 31.7762 10.4493 27.6872 11.1602 27.6391ZM27.6911 32.995C27.65 33.244 27.592 33.4363 27.5205 33.5985C26.9567 34.0985 26.3641 34.5575 25.7441 34.9704C25.5465 35.0072 25.3711 34.9816 25.2854 34.8214C24.4635 33.2256 24.1551 28.2196 24.9504 27.7838C25.9873 27.2304 27.8448 32.1296 27.6911 32.995ZM17.0008 0C26.2592 0 33.7881 8.10231 33.9958 18.1843L34 18.5328V18.6939C33.983 23.248 32.4664 27.4146 29.9678 30.6395C29.8772 30.5892 29.7119 30.4247 29.4123 29.9296C29.1024 29.4319 26.4296 24.8863 26.4296 19.6764C26.4296 18.6539 27.7632 17.0568 28.9434 15.6548C29.8255 14.5999 30.6612 13.6048 30.9689 12.8227C31.3609 11.8135 31.0866 11.1089 30.6529 10.87C30.2603 10.6577 29.6709 10.8126 29.2573 11.6244C28.5786 12.9382 28.3611 13.1837 27.3711 14.0628C26.3969 14.9414 24.8481 15.8259 24.8481 14.681C24.8481 14.0628 25.7107 12.6628 26.1369 11.6814C26.5721 10.6891 26.103 9.97077 25.2043 9.97077C23.4396 9.97077 22.2682 12.4549 22.2682 13.3156C22.2682 14.1755 22.6457 14.298 22.6457 15.2994C22.6457 16.3084 20.7095 17.6171 18.8856 17.6171C17.1296 17.6171 16.1113 17.2243 15.6894 16.1178L15.6355 15.9625L15.5136 15.5637C15.0809 14.1664 14.7706 13.153 14.2303 12.0939C13.9434 11.5338 13.5008 11.1456 13.1179 10.8039C12.6176 10.3745 12.358 9.97905 12.3039 9.68414C12.2539 9.39155 12.227 8.84016 13.0824 7.56911C13.9359 6.30531 14.0555 5.35057 13.6284 4.85793C13.4736 4.68268 13.2096 4.5704 12.8707 4.5704C12.2712 4.5704 11.4382 4.92141 10.5798 5.88556C9.24534 7.39663 10.0029 8.8313 10.0029 9.4611C10.0029 10.0905 9.75845 10.4465 8.95763 11.3028C8.15095 12.1628 7.87254 12.9002 7.78028 15.8637C7.74493 17.3907 7.50158 18.2697 7.28313 19.049C7.09437 19.7322 6.92076 20.3744 6.91138 21.3023C6.89643 22.3307 7.05132 22.9933 7.23208 23.7579C7.40955 24.4647 7.59803 25.2745 7.7188 26.6291C7.91088 28.726 7.8441 30.4973 7.49487 32.3077L7.40167 32.7613L7.37989 32.8916C7.30837 33.2098 7.22336 33.5962 7.10845 33.741C2.80581 30.3638 0 24.8484 0 18.6138C0 8.33457 7.61122 0 17.0008 0Z"
                      fill="white"
                    />
                  </svg>
                  Оставить заявку
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Basket;
