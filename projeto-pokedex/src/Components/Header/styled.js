import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 2px #dedede;
  padding: 0 35px;

  @media (min-width: 539px) {
    width: 100%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

`;

export const Logo = styled.img`
  height: 70px;

  @media (max-width: 539px) {
    height: 40px;
    padding-right: 10px; 
    margin-right: 5px; 
  }
`;
