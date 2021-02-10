import React from "react";
import { useHistory } from "react-router-dom";
import ButtonProps from "../Buttons/Button";
import { CardContainer, CardImg, CardName, Img, CardButton } from "./styled";

const CardPokemon = (props) => {
  const { image, name, addToPokedex } = props;
  const history = useHistory();

  return (
    <CardContainer>
      <CardImg>
        <Img src={image} alt={name} />
      </CardImg>
      <CardName>{name}</CardName>
      <CardButton>
        <ButtonProps title="ADD" bgColor="#a02dff"  radiusL="20px"/>
        <ButtonProps title="INFO" bgColor="#000065" radiusR="20px"/>
      </CardButton>
    </CardContainer>
  );
};

export default CardPokemon;
