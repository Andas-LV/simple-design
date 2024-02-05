// Questions.js
import React, { useState } from "react";
import styles from "./Questions.module.css";
import plus from "../../../Assets/img-mainpage/plus.svg";

export default function Questions() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.H1}>Часто задаваемые вопросы</div>
      {[...Array(5)].map((_, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.Question} onClick={() => toggleQuestion(index)}>
            <img src={plus} alt="img" />
            <div className={styles.QuesName}>Вопрос</div>
          </div>
          {activeQuestion === index && (
            <div className={styles.Text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              necessitatibus iste mollitia ea. Fugiat, repellat a necessitatibus
              soluta itaque iure maiores? Suscipit aut voluptatem, odit qui
              doloremque labore voluptatum at?
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
