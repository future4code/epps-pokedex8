import styled from "styled-components";

export const CardMain = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 25px;
`;

export const CardContainer = styled.div`
  border-radius: 20px;
  box-shadow: 0 3px 15px rgb(100 100 100 / 50%);
  margin: 10px;
  padding: 20px;
  width: 30vh;
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #a9ffce;
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
  letter-spacing: 1px;
  font-family: "Lato";
`;
