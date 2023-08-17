import styled from "styled-components";

export const H1 = styled.div`
  color: #262626;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 40px 0;
`;
export const Text = styled.div`
  color: rgba(38, 38, 38, 0.7);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1180px;
  background-color: 333;
`;

export const Block = styled.div``;
export const BlockName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
`;
export const H3 = styled.div`
  color: #262626;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const H4 = styled.div`
  color: #353535;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Line = styled.div`
  width: 999px;
  height: 1px;
  background: #cbcbcb;
`;
export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
`;
export const Item = styled.div``;
export const SubItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 45px;
  max-width: 380px;
`;
export const Button = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 182px;
  height: 56px;
  border-radius: 100px;
  background: #f5f5f5;
  cursor: pointer;

  hover{
    background: #f1f1f1;
  }
`;
