import React, { useState } from "react";
import Plan from "./Planning";
import Project from "./Project";
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
        <div
          className={active ? "plan-btn active" : "plan-btn"}
          onClick={togglePlan}>
          Планировка
        </div>
        <div
          className={open ? "project-design-btn active" : "project-design-btn"}
          onClick={toggleProject}>
          Дизайн-проектов
        </div>
      </Wrapper>
      {planContent && <Plan />}
      {projectContent && <Project />}
    </>
  );
};
export default Prices;
