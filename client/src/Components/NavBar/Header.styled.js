import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  height: 120px;
  position: sticky;
  z-index:10;
  @media (min-width: 1279px) {

  }
  @media (min-width: 768px) {

  }
  @media (min-width: 480px) {

  }
`;
export const Account = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  span {
    color: black;
  }
  span:hover {
    color: #bd7048;
  }
  @media (max-width: 1279px) {
    font-size:14px;
  }
  @media (max-width: 991px) {
    display:none;
  }
  @media (max-width: 767px) {
  
  }
  @media (max-width: 479px) {
  
  }
`;
export const AccountLine = styled.div`
  width: 1px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1279px) {
    
  }
  @media (max-width: 991px) {

  }
  @media (max-width: 767px) {
  
  }
  @media (max-width: 479px) {
  
  }
`;
export const Logo = styled.div`
  margin: 40px 0;
  p {
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  @media (max-width: 1279px) {
    
  }
  @media (max-width: 991px) {

  }
  @media (max-width: 767px) {
  
  }
  @media (max-width: 479px) {
  
  }
`;
export const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  position: relative;
  span {
    color: rgba(0, 0, 0, 0.5);
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
  }
  span:hover,
  a:hover {
    color: black;
  }
  @media (max-width: 1279px) {
    span{
      font-size:14px;
    }
  }
  @media (max-width: 991px) {
    span{
      display:none;
    }
  }
`;
export const NavDropdown = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width:170px;
    position: absolute;
    top: 40px;
    background: white;
    list-style-type: none;
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    padding: 10px;
    gap: 10px;
  }
  li {
    color: rgba(0, 0, 0, 0.7);
    font-size: 15px;
    font-weight: 500;
  }
`;
