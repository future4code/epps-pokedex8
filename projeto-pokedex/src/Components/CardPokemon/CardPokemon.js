import React from "react";
import { CardMain, CardContainer, CardImg, CardName, Img } from "./styled";

const CardPokemon = (props) => {
  const ArrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const resultArray = ArrayTest.map(() => (
    <CardContainer>
      <CardImg>
        <Img src={props.img} alt={props.img} />
      </CardImg>
      <CardName>{props.name}</CardName>
    </CardContainer>
  ));

  return <CardMain>{resultArray}</CardMain>;
};

export default CardPokemon;
