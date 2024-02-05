// HomeMain.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Basket from "../../../Components/Modals/Basket/Basket";
import styles from "./HomeMain.module.css";

import img1 from "../../../Assets/img-mainpage/main-1-1.svg";
import img2 from "../../../Assets/img-mainpage/main-1-2.svg";
import img3 from "../../../Assets/img-mainpage/main-1-3.svg";
import kaspi from "../../../Assets/img-mainpage/Kaspi.svg";
import bag from "../../../Assets/img-mainpage/bag.svg";

const infoBlocks = [
  { img: img1, title: "2 недели", description: "срок выполнения заказа" },
  { img: img2, title: "Не важно", description: "Сколько квадратов, цена - одна!" },
  { img: img3, title: "Рассрочка", description: "до 24 месяцев", kaspiImg: kaspi },
];

export default function HomeMain() {
  const [modalActive, setModalActive] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <div className={styles.homeMain}>
      <div className={styles.wrapper}>
        <span onClick={() => setModalActive(true)}>
          Моя корзина
          <img src={bag} alt="img" className={styles.bag} />
        </span>
        <Basket active={modalActive} setActive={setModalActive} selectedItems={selectedItems} />

        <h1>
          Дизайн-проект для вашей квартиры <br /> за 2 недели и 199 000 ₸
        </h1>

        <Link to="/contact">
          <div className={styles.btn}>Консультация</div>
        </Link>

        <div className={styles.infoBlock}>
          {infoBlocks.map((info, index) => (
            <div key={index} className={styles.info}>
              <img src={info.img} alt="img" />
              <div className={styles.text}>
                <h3>{info.title}</h3>
                <p>{info.description}</p>
                {info.kaspiImg && <img src={info.kaspiImg} alt="img" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
