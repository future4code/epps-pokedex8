import styled from "styled-components";

export const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PokeballAnimation = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background: #fff;
  border: 10px solid #000;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -10px 10px 0 10px #ccc;
  animation: fall 0.25s ease-in-out,
    shake 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) 3;

  :before,
  :after {
    content: "";
    position: absolute;
  }
  :before {
    background: red;
    width: 100%;
    height: 50%;
  }
  :after {
    top: calc(50% - 10px);
    width: 100%;
    height: 20px;
    background: #000;
  }
`;

export const PokeballButton = styled.div`
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  width: 60px;
  height: 60px;
  background: #7f8c8d;
  border: 10px solid #fff;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 10px black;
  animation: blink 0.5s alternate 7;

  @keyframes blink {
    from {
      background: #eee;
    }
    to {
      background: #e74c3c;
    }
  }
  @keyframes shake {
    0% {
      transform: translate(0, 0) rotate(0);
    }
    20% {
      transform: translate(-10px, 0) rotate(-20deg);
    }
    30% {
      transform: translate(10px, 0) rotate(20deg);
    }
    50% {
      transform: translate(-10px, 0) rotate(-10deg);
    }
    60% {
      transform: translate(10px, 0) rotate(10deg);
    }
    100% {
      transform: translate(0, 0) rotate(0);
    }
  }
  @keyframes fall {
    0% {
      top: -200px;
    }
    60% {
      top: 0;
    }
    80% {
      top: -20px;
    }
    100% {
      top: 0;
    }
  }
`;

// PokemonDetailsPage

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-family: "Lato";
`;

export const ContainerDetails = styled.div`
  width: 33vw;
  height: auto;
  margin: auto;
  color: #ffffff;
  font-size: 20px;
  background-color: #423d94;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 3px 15px rgb(100 100 100 / 50%);
  &:hover {
    transition: transform 1s;
    transform: scale(1.01);
  }

  @media (max-width: 786px) {
    width: 44vw;
  }

`;

export const ContainerType = styled.div`
  width: 30vw;
  height: auto;
  margin: 30px;
  font-size: 20px;
  color: #423d94;
  background-color: #3f3c93;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgb(100 100 100 / 50%);
  background-color: #a3f3ce;
  &:hover {
    transition: transform 1s;
    transform: scale(1.01);
  }

  @media (max-width: 786px) {
    width: 44vw;
  }

`;

export const ImageOne = styled.div`
  margin: 40px;
  color: #423d94;
  background-color: #72c09d;
  box-shadow: 0 3px 18px rgb(100 100 100 / 50%);
  width: 22vw;
  height: 50vh;
  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;
  border-radius: 10px;
  &:hover {
    transform: rotateY(180deg);
    transition: transform 1s;
  }

  @media (max-width: 786px) {
    width: 44vw;
  }

`;

export const DivType = styled.div`
  margin: 10px;
  border-radius: 10px;
  padding: 20px;
  background-color: #d6f9eb;
`;

export const DivMove = styled.div`
  margin: 10px;
  border-radius: 10px;
  padding: 20px;
  background-color: #d6f9eb;
`;

export const Front = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 10px;
  width: 25vw;
  box-shadow: 0 3px 18px rgb(100 100 100 / 50%);
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const Back = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px;
  width: 25vw;
  box-shadow: 0 3px 18px rgb(100 100 100 / 50%);
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export const Image = styled.img`
  border-radius: 350px;
  width: 15vw;
  margin-bottom: 25px;
  background-color: #d6f9eb;
`;

export const HeaderDetails = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding: 30px;
  font-family: "Press Start 2P", cursive;
`;

export const ContainerPokemon = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  @media (max-width: 786px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 787px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const DivContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 786px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 787px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
`;

export const Progress = styled.progress`
  width: 27.5vw;
  height: 3vh;
`;
