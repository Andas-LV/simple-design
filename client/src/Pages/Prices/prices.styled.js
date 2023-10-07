import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  background: #db916b;
`;

export const PlanBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-radius: 10px;
  padding: 25px 0;
  background: ${props => (props.active ? "#ca774e" : "#db916b")};
  transition: background 0.2s;
  &:hover {
    cursor: pointer;
  }
`;

export const ProjectDesignBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-radius: 10px;
  padding: 25px 0;
  background: ${props => (props.active ? "#ca774e" : "#db916b")};
  transition: background 0.2s;
  &:hover {
    cursor: pointer;
  }
`;
