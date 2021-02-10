import React from "react";
import { useHistory } from "react-router-dom";
import { CardContainer, CardImg, CardName, Img } from "./styled";

const CardPokemon = (props) => {
  
  const { image, name, addToPokedex } = props;
  const history = useHistory();

  return (
      <CardContainer>
        <CardImg>
          <Img src={image} alt={name} />
        </CardImg>
        <CardName>{name}</CardName>
      </CardContainer>
  );
  
};

export default CardPokemon;
