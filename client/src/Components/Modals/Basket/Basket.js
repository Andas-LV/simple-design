import React from "react";
import "./basket.css";
import close from "../../../Assets/img-mainpage/close.svg";
import checkBox from "../../../Assets/img-mainpage/checkBox.svg";

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
                <img src={checkBox} alt="img" className="checkBox" />
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
                <img src={checkBox} alt="img" className="checkBox" />
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
              
            </div>
          </div>
          <div className="bill"></div>
        </div>
      </div>
    </div>
  );
};
export default Basket;
