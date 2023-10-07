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
  background: ${(props) => (props.active ? "#ca774e" : "#db916b")};
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
  background: ${(props) => (props.active ? "#ca774e" : "#db916b")};
  transition: background 0.2s;
  &:hover {
    cursor: pointer;
  }
`;
export const P = styled.div`
  width: 80vw;
  margin: 20px auto;
  font-size: clamp(12px, 4vw, 18px);
`;
export const H3 = styled.div`
  width: 80vw;
  margin: 20px auto;
  margin-bottom: ${props => props.marginBottom || "transparent"};
  font-size: clamp(12px, 4vw, 18px);
  font-weight: 600;
`;
