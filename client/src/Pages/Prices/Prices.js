import React from "react";
import Plan from "./Planning";
import Project from "./Project";
import "./prices.css";

const Prices = ({ active, setActive }) => {
  return (
    <>
      <div className="price-header">
        <div
          className={active ? "plan-btn active" : "plan-btn"}
          onClick={() => setActive(false)}>
          Планировка
        </div>
        <div
          className={
            active ? "project-design-btn active" : "project-design-btn"
          }
          onClick={() => setActive(false)}>
          Дизайн-проектов
        </div>
      </div>
      <Plan />
      <Project />
    </>
  );
};
export default Prices;
