import React from "react";
import styles from "./Request.module.css";
import { Link } from "react-router-dom";
import pdf from "../../Assets/img-mainpage/pdf.svg";

export default function Request() {
  return (
    <div className={styles.Wrapper}>
      <Link to="/request">
        <button>Оставить заявку</button>
      </Link>
      <div className={styles.Pdf}>
        <img src={pdf} alt="img" />
        <p>Посмотреть пример</p>
      </div>
    </div>
  );
}
