import React from "react";
import { CardMain, CardContainer, CardImg, CardName, Img } from "./styled";

const CardPokemon = (props) => {
  return (
    <CardContainer>
      <CardImg>
        <Img src={props.img} alt={props.img} />
      </CardImg>
      <CardName>{props.name}</CardName>
    </CardContainer>
  );
};

export default CardPokemon;
