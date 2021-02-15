import styled from "styled-components";

export const CardMain = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 25px;

  @media (max-width: 539px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 540px) and (max-width: 634px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 635px) and (max-width: 767px) {
    gap: 5px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 768px) and (max-width: 992px){
    gap: 5px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CardContainer = styled.div`
  border-radius: 20px;
  box-shadow: 0 3px 15px rgb(100 100 100 / 50%);
  margin: 10px;
  padding: 20px;
  width: 30vh;
  height: 36vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #a9ffce;

  @media (max-width: 539px) {
    margin: auto;
  }
`;

export const CardImg = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  text-align: center;
`;

export const Img = styled.img`
  margin-top: 20px;
  max-width: 90%;
`;

export const CardName = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: #006bb3;
  width: 100%;
  max-height: 100%;
  margin: 15px 0 7px;
  padding: 5px;
  letter-spacing: 1px;
  font-family: "Lato";
`;

export const CardButton = styled.div`
  display: flex;
  outline: none;
`;
