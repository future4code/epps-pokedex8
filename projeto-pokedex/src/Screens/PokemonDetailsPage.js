import React, { useState } from "react"
import styled from 'styled-components'
import Seta from "../images/seta-para-direita.png"

const ContainerContent = styled.div`
display: grid;
justify-content: center;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
border: solid 2px #f0f0f0;
border-radius: 10px;
height: 100vh;
`
const ContainerDetails = styled.div`
margin: 10px;
border: solid 2px #f0f0f0;
border-radius: 10px;
padding: 20px; 
box-shadow: 0px 0px 50px 1px #DDDDDD;
`
const ContainerType = styled.div`
background-color: #f0f0f0;
margin: 10px;
border: solid 2px #f0f0f0;
border-radius: 10px;
padding: 20px; 
box-shadow: 0px 0px 50px 1px #DDDDDD;
`
const ImageOne = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
border: solid 2px #f0f0f0;
border-radius: 10px;
padding: 20px; 
width: 25vw;
height: 65vh;
box-shadow: 0px 0px 50px 1px #DDDDDD;
`
const ImageTwo = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
border: solid 2px #f0f0f0;
border-radius: 10px;
padding: 20px; 
width: 25vw;
height: 65vh;
box-shadow: 0px 0px 50px 1px #DDDDDD;
`
const DivType = styled.div`
margin: 10px;
border: solid 2px #f0f0f0;
border-radius: 10px;
padding: 20px; 
background-color: #FFF;
`
const DivMove = styled.div`
margin: 10px;
border: solid 2px #f0f0f0;
border-radius: 10px;
padding: 20px; 
background-color: #FFF;
`
const Button = styled.div`
position: absolute;
&:hover{
  transform: scale(1.3)
  

}
`
const StyledSeta = styled.img`
width: 3vw;
height: 5vh;
`

const PokemonDetailsPage = () => {
  const [images, setImages] = useState(true)

const image = () => {
  if(images) {
return(
 
  <ImageOne>
  <img src="https://picsum.photos/350" />
  <Button onClick={() => setImages(false)}><StyledSeta src={Seta} /></Button>
  </ImageOne>
 )
  } else {
    return (
      <ImageTwo>
      <img src="https://picsum.photos/350" />
      <Button onClick={() => setImages(true)}><StyledSeta src={Seta} /></Button>
      </ImageTwo>
    )
  }
} 
  return (
    <ContainerContent>
      {image()}

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


    </ContainerContent>
  );
};

export default PokemonDetailsPage;

