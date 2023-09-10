import React from "react";
import Footer from "../../Components/Footer/Footer";
import { Wrapper, H1, Logo, DesignBlock } from "./About.styled";
import img1 from "../../Assets/About/main-top.svg"

const About = () => {
  return (
    <Wrapper>
      <h4>
        Команда Simple <span>Design</span>
      </h4>
      <h1>Первый интернет-сервис дизайна интерьера в Казахстане</h1>
      <img src={img1} alt="img" className="about-main-img"/>
      <Footer />
    </Wrapper>
  );
};
export default About;
