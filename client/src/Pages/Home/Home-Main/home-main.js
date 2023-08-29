import React, { useState } from "react";
import { Link } from "react-router-dom";
import Basket from "../../../Components/Modals/Basket/Basket";
import "../Home-Main/home-main.css";
import { Wrapper, Btn, InfoBlock, Info, Text } from "./Home-main.styled";
import img1 from "../../../Assets/img-mainpage/main-1-1.svg";
import img2 from "../../../Assets/img-mainpage/main-1-2.svg";
import img3 from "../../../Assets/img-mainpage/main-1-3.svg";
import kaspi from "../../../Assets/img-mainpage/Kaspi.svg";
import bag from "../../../Assets/img-mainpage/bag.svg";

export default function HomeMain() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="home-main">
      <Wrapper>
        {/* MODAL */}
        <span onClick={() => setModalActive(true)}>
          Моя корзина
          <img src={bag} alt="img" className="bag" />
        </span>
        <Basket active={modalActive} setActive={setModalActive}/>
        {/* MODAL END*/}
        <h1>
          Дизайн-проект для вашей квартиры <br /> за 2 недели и 199 000 ₸
        </h1>

        <Link to="/contact">
          <Btn>Консультация</Btn>
        </Link>

        <InfoBlock>
          <Info>
            <img src={img1} alt="img" />
            <Text>
              <h3>2 недели</h3>
              <p>срок выполнения заказа</p>
            </Text>
          </Info>
          <Info>
            <img src={img2} alt="img" />
            <Text>
              <h3>Не важно</h3>
              <p>Сколько квадратов, цена - одна!</p>
            </Text>
          </Info>
          <Info>
            <img src={img3} alt="img" />
            <Text>
              <h3>Рассрочка</h3>
              <p>до 24 месяцев</p>
              <img src={kaspi} alt="img" />
            </Text>
          </Info>
        </InfoBlock>
      </Wrapper>
    </div>
  );
}