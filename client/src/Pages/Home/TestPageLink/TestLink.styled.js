import styled from "styled-components";

export const H1 = styled.div`
  color: #fff;
  font-family: Montserrat Alternates;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  max-width: 500px;
`;
export const Text = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-family: Montserrat Alternates;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  max-width: 500px;
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 228px;
  height: 74px;
  border-radius: 100px;
  background: #bd7048;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  transition: 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #d87e4d;
  }
`;
export const Wrapper = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-left: 178px;
`;
