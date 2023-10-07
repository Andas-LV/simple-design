import React, { useState } from "react";
import Planning from "./Planning";
import Project from "./Project";
import Questions from "../Home/Questions/Questions";
import Footer from "../../Components/Footer/Footer"
import { Wrapper, PlanBtn, ProjectDesignBtn } from "./prices.styled.js";

const Prices = () => {
  const [active, setActive] = useState(true);
  const [open, setOpen] = useState(false);
  const [planContent, setPlanContent] = useState(true);
  const [projectContent, setProjectContent] = useState(false);

  const togglePlan = () => {
    if (!active) {
      setActive(true);
      setOpen(false);
      setPlanContent(true);
      setProjectContent(false);
    }
  };

  const toggleProject = () => {
    if (!open) {
      setOpen(true);
      setActive(false);
      setProjectContent(true);
      setPlanContent(false);
    }
  };

  return (
    <>
      <Wrapper>
        <PlanBtn active={active} onClick={togglePlan}>
          Планировка
        </PlanBtn>
        <ProjectDesignBtn active={open} onClick={toggleProject}>
          Дизайн-проектов
        </ProjectDesignBtn>
      </Wrapper>
      {planContent && <Planning />}
      {projectContent && <Project />}
      <Questions />
      <Footer/>
    </>
  );
};
export default Prices;
