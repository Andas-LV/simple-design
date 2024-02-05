// Services.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Services.module.css";
import Request from "../../../Components/RequestLink/Request";
import Img1 from "../../../Assets/img-mainpage/main-3.svg";
import Img2 from "../../../Assets/img-mainpage/main-4.svg";
import Img3 from "../../../Assets/img-mainpage/main-5.svg";

export default function Services() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.H1}>Наши услуги</div>
      <div className={styles.Block1}>
        <div className={styles.Info}>
          <h2>Планировка за 99 000 ₸</h2>
          <p>Срок выполнения: 5 дней</p>
          <p>
            Мы разработаем для вас уникальное планировочное решение квартиры,
            которое будет соответствовать как нормам эргономики, так и вашим
            личным пожеланиям, а также подготовим чертеж для согласования
            планировки.
          </p>
          <ul>
            <li>2 варианта планировки + финальный</li>
            <li>обмерный план</li>
            <li>план демонтажа</li>
            <li>план монтажа перегородок</li>
          </ul>
          <Request />
        </div>
        <img src={Img1} alt="img" />
      </div>
      <div className={styles.Block2}>
        <img src={Img2} alt="img" />
        <div className={styles.Info}>
          <h2>Дизайн-проект за 199 000 ₸</h2>
          <p>Срок выполнения: 14 дней</p>
          <p>
            Разработаем планировочное решение вашей квартиры, далее на его
            основе мы подготовим альбом, состоящий из 12 чертежей, необходимых
            строителям для ремонта.
          </p>
          <ul>
            <li>
              2 варианта планировки + финальный планы демонтажа и монтажа стен
              розетки, выключатели, освещение сантехника план потолка план пола
              и плинтусов план дверей
            </li>
            <li>планы демонтажа и монтажа стен</li>
            <li>розетки, выключатели, освещение</li>
            <li>сантехника</li>
            <li>план потолка</li>
            <li>план пола и плинтусов</li>
            <li>план дверей</li>
          </ul>
          <Request />
        </div>
      </div>
      <div className={styles.Block3}>
        <img src={Img3} alt="img" />
        <div className={styles.SubBlock}>
          <h2>Планируете ремонт?</h2>
          <p>Ответьте на несколько вопросов и получите <br/> бесплатный чек-лист по ремонту</p>
          <Link to="/request">
            <div className={styles.Btn}>Получить чек-лист</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
