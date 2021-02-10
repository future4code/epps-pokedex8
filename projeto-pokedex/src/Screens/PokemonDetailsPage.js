import React, { useState } from "react"
import styled from 'styled-components'
import ImagePoke from "../Img/pokedex.png"

const ContainerContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
height: 100vh;
font-family: "Lato";
`

const ContainerDetails = styled.div`
width: 30vw;
height: 40vh;
margin: 30px;
color: #F8CF2D;
font-size: 20px;
background-color: #423D94;
border-radius: 10px;
padding: 20px; 
box-shadow: 0 3px 15px rgb(100 100 100 / 50%);
&:hover{
  transition: transform 1s;
  transform: scale(1.01);
}
`
const ContainerType = styled.div`
width: 30vw;
height: 44vh;
margin: 30px;
font-size: 20px;
color: #423D94;
background-color: #3F3C93;
border-radius: 10px;
padding: 20px; 
box-shadow: 0 3px 15px rgb(100 100 100 / 50%);
background-color: #A3F3CE;
&:hover{
  transition: transform 0.8s;
  transform: scale(1.01)  ;
}
`
const ImageOne = styled.div`
margin: 40px;
color: #423D94;
background-color: #50A7D7;
box-shadow: 0 3px 18px rgb(100 100 100 / 50%); 
width: 27vw;
height: 70vh;
transition: transform 0.8s;
transform-style: preserve-3d;
position: relative;
border-radius: 10px;
&:hover{
  transform: rotateY(180deg);
  transition: transform 0.8s;
}
`

const DivType = styled.div`
margin: 10px;
border-radius: 10px;
padding: 20px; 
background-color: #D6F9EB;
`
const DivMove = styled.div`
margin: 10px;
border-radius: 10px;
padding: 20px; 
background-color: #D6F9EB;
`

const Front = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
border-radius: 10px;
padding: 20px; 
width: 25vw;
height: 65vh;
box-shadow: 0 3px 18px rgb(100 100 100 / 50%);
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
`

const Back = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
border-radius: 10px;
padding: 20px; 
width: 25vw;
height: 65vh;
box-shadow: 0 3px 18px rgb(100 100 100 / 50%);
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
transform: rotateY(180deg);
`
const Image = styled.img`
border-radius: 10px;
width: 24vw;
margin-bottom: 25px;
`

const PokemonDetailsPage = () => {
  
  return (
    <ContainerContent>
      <ImageOne>
        <Front>
          <h2>Imagem frontal</h2>
          <Image src={ImagePoke} />
        </Front>

        <Back>
        <h2>Imagem de costas</h2>
          <Image src="https://picsum.photos/350" />
        </Back>
      </ImageOne>

      <div>
        <ContainerDetails>
          <h3>Stats</h3>
          <p>HP: </p>
          <p>Attack: </p>
          <p>Defence: </p>
          <p>special-attack: </p>
          <p>special-defence: </p>
          <p>speed: </p>
        </ContainerDetails>

        <ContainerType>
          <DivType>
            <p>Type 1</p>
            <p>Type 2</p>
          </DivType>

          <DivMove>
            <h3>Moves</h3>
            <p>move name 1</p>
            <p>move name 2</p>
            <p>move name 3</p>

          </DivMove>
        </ContainerType>
      </div>

    </ContainerContent>
  );
};

export default PokemonDetailsPage;
