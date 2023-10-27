import React from "react";
import "./basket.css";
import close from "../../../Assets/img-mainpage/close.svg";
import { Link } from "react-router-dom";

const Basket = ({ active, setActive, selectedItems }) => {
  let finalCheck = selectedItems
    ? selectedItems.reduce((total, item) => total + item.price, 0)
    : 0;
  return (
    <div
      className={active ? "busket active" : "busket"}
      onClick={() => setActive(true)}>
      <div className="busket-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="busket-content">
          <div className="basket-items">
            {selectedItems && selectedItems.length === 0 ? (
              <p>Your basket is empty.</p>
            ) : (
              <>
                {selectedItems.map((item) => (
                  <span key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Price: {item.price}</p>
                  </span>
                ))}
              </>
            )}
          </div>
          <div className="btn-wrapper">
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

        <div className="closer">
          <img
            src={close}
            alt="img"
            className="close"
            onClick={() => setActive(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Basket;
