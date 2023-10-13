import styled from "styled-components";

export const Bag = styled.div`
  position: absolute;
  right: 0;
  top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 80px;
  height: 80px;
  background: #262626;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 100px 0 0 100px;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: 0.4s all;
  &:hover {
    background: rgb(44, 44, 44);
  }
`;
export const Check = styled.div`
  position: absolute;
  right: 15px;
  top: 10px;
  display:${(props) => (props.active ? "flex" : "none")};
  justify-content:center;
  align-items:center;
  background: #ce2424;
  color: white;
  font-size: 16px;
  width: 25px;
  height: 25px;
  border-radius: 25px;
`;
