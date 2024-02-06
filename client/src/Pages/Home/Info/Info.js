// Info.js
import React from "react";
import styles from "./Info.module.css";
import img from "../../../Assets/img-mainpage/main-2.jpg";

const InfoBlock = ({ number, title, description }) => (
  <div className={styles.InfoBlocks}>
    <div className={styles.Number}>{number}</div>
    <div className={styles.TextGroup}>
      <div className={styles.H4}>{title}</div>
      <div className={styles.P}>{description}</div>
    </div>
  </div>
);

const Info = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.InfoBlock}>
        <div className={styles.H1}>Как это работает?</div>
        <InfoBlock
          number="01"
          title="Выбор состава проекта"
          description="Выберите состав вашего проекта: только планировка или дизайн-проект"
        />
        <InfoBlock
          number="02"
          title="Настройка проекта"
          description="Отметьте в корзине нужен ли вам профессиональный замер, подбор строительной бригады или точный просчет сметы"
        />
        <InfoBlock
          number="03"
          title="Создание чертежей"
          description="Наши дизайнеры спроектируют интерьер, подготовят чертежи."
        />
      </div>
      <img src={img} alt="img" />
    </div>
  );
};

export default Info;
