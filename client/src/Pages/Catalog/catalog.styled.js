import styled from "styled-components";

export const Bag = styled.div`
  position: absolute;
  right: 0;
  top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 150px;
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
