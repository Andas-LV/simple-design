import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100vw;
  margin-top: 50px;
  margin-bottom:120px;
  gap: 50px;
`;
export const H1 = styled.div`
  color: #262626;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 40px;
  margin: auto;
`;
export const Block1 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 160px;
  padding-left: calc((100vw - 1186px) / 2);
`;
export const Block2 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 160px;
  padding-right: calc((100vw - 1186px) / 2);
  margin: 50px 0;
`;
export const Block3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 160px;
  padding-left: calc((100vw - 1186px) / 2);
  padding-right: calc((100vw - 1186px) / 2);
  margin-top: 75px;
  p {
    margin: 40px 0;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  font-style: normal;
  gap: 30px;
  h2 {
    color: #262626;
    font-size: 30px;
    font-weight: 600;
  }
  p {
    color: #000;
    font-size: 20px;
    font-weight: 400;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
export const SubBlock = styled.div`
  width: 563px;
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
