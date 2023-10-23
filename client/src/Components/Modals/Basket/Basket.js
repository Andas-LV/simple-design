import React from "react";
import "./basket.css";
import close from "../../../Assets/img-mainpage/close.svg";
import { Link } from "react-router-dom";

const Basket = ({ active, setActive, selectedItems }) => {
  // let finalCheck = selectedItems.reduce((total, item) => total + item.price, 0);
  let finalCheck = 0;
  return (
    <div
      className={active ? "busket active" : "busket"}
      onClick={() => setActive(true)}>
      <div className="busket-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="closer">
          <img
            src={close}
            alt="img"
            className="close"
            onClick={() => setActive(false)}
          />
        </div>

        <div className="basket-items">
          {selectedItems.length === 0 ? (
            <p>Your basket is empty.</p>
          ) : (
            <ul>
              {selectedItems.map((item) => (
                <li key={item.id}>
                  <h3>{item.name}</h3>
                  <p>Price: {item.price}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link to="/request">
          <button className="basket-request-btn">Оставить заявку</button>
        </Link>
        <Link to="/">
          <button className="pay-btn">Оплатить {finalCheck}</button>
        </Link>
        <Link to="/">
          <button className="kaspi-pay-btn">Оплатить в рассрочку</button>
        </Link>
      </div>
    </div>
  );
};
export default Basket;
