// TestLink.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./TestLink.module.css";

export default function TestLink() {
  return (
    <div className={styles.img}>
      <div className={styles.Wrapper}>
        <div className={styles.H1}>Давайте определим, что вам нравится</div>
        <div className={styles.Text}>
          Пройдите короткий тест и мы покажем подходящие вам стилевые решения
        </div>
        <Link to="/test">
          <div className={styles.Button}>Пройти тест</div>
        </Link>
      </div>
    </div>
  );
}
