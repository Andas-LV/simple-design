import React from "react";
import Footer from "../../Components/Footer/Footer";
import { Wrapper, Line, DesignBlock, BlockText, TextBlock } from "./About.styled";
import img1 from "../../Assets/About/main-top.svg";
import img2 from "../../Assets/About/2-photo.svg";
import img3 from "../../Assets/About/carousel.svg";
import img4 from "../../Assets/About/chel.svg";
import img5 from "../../Assets/About/video-preview.svg";


const About = () => {
  return (
    <Wrapper>
      <h4>
        Команда Simple <span>Design</span>
      </h4>
      <h1>Первый интернет-сервис дизайна интерьера в Казахстане</h1>
      <img src={img1} alt="img" className="about-main-img" />
      <DesignBlock>
        <BlockText>
          <h2><span>10</span> дизайн-концепций, отражающих актуальные стили в интерьере</h2>
          <p>
            Мы создали сервис для тех, кто не знает, как подступиться к большому
            ремонту, ценит качественный дизайн, для тех, кому нужен чёткий план.
            Заказав Simple Design - вы получите дизайн-проект, подробную
            инструкцию по реализации, смету с материалами, чек-лист для проверки
            строителей.
          </p>
        </BlockText>
        <img src={img2} alt="img" className="about-main-img" />
      </DesignBlock>
      <TextBlock>
        <Line></Line>
        <h1>В команде Simple design <span>21 человек</span></h1>
      </TextBlock>
      <img src={img3} alt="img" className="about-img-3"/>
      <DesignBlock></DesignBlock>
      <DesignBlock></DesignBlock>
      <Footer />
    </Wrapper>
  );
};
export default About;
