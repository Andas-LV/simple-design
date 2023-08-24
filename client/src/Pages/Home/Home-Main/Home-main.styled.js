import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  h1 {
    color: #fff;
  }
  span {
    position: absolute;
    right: 0;
    top: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 250px;
    height: 100px;
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
  }
`;
export const Btn = styled.div`
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
export const InfoBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 140px;
  position: absolute;
  bottom: 20px;
  max-width: 70vw;
  color: #fff;
  text-align: left;
  opacity: 1;
`;
export const Info = styled.div`
  position: relative;
  display: flex;
  gap: 22px;
  width: 240px;
`;
export const Text = styled.div`
  max-width: 185px;
  p {
    color: rgba(255, 255, 255, 0.7);
    flex-wrap: wrap;
    font-size: 15px;
    font-weight: 500;
    margin: 7px 0;
  }
  h3 {
    color: white;
    font-size: 20px;
    font-weight: 500;
  }
`;