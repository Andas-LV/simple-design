import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  h1 {
    color: #060606;
    text-align: center;
    font-size: 50px;
    font-weight: 500;
    margin-bottom: 50px;
  }
  h4 {
    color: #060606;
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    margin: 40px 0 20px 0;
  }
  span {
    opacity: 0.7;
    color: #bd7048;
    font-size: 30px;
    font-weight: 500;
  }
`;
export const H1 = styled.div`
  color: #060606;
  text-align: center;
  font-size: 50px;
  font-weight: 500;
`;
export const Line = styled.div`
width: 966px;
height: 1.5px;
background: #000;
margin-top:25px;
`;
export const DesignBlock = styled.div`
  display: flex;
  justify-content: space between;
  align-items:flex-start;
  padding: 0 100px;
  margin: 50px 0;
  h1 {
    color: #000;
    font-size: 43px;
    font-weight: 400;
  }
  h2 {
    color: #000;
    font-size: 43px;
    font-weight: 400;
  }
  span {
    color: #bd7048;
    font-size: 43px;
    font-weight: 400;
  }
  p {
    color: #000;
    font-size: 20px;
    font-weight: 400;
  }
`;
export const TextBlock = styled.div`
  display: flex;
  justify-content: space between;
  align-items:flex-start;
  padding: 0 100px;
  margin: 50px 0;
  h1 {
    color: #000;
    font-size: 43px;
    font-weight: 400;
  }
  span {
    color: #bd7048;
    font-size: 43px;
    font-weight: 400;
  }
`;
export const BlockText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;
