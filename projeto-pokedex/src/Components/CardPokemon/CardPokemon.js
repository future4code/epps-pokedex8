import React from "react";
import { useHistory } from "react-router-dom";
import { CardMain, CardContainer, CardImg, CardName, Img } from "./styled";

const CardPokemon = (props) => {
  // const ArrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { image, name, addToPokedex } = props;
  const history = useHistory();

  // const resultArray = ArrayTest.map(() => (
  return (
    <CardMain>
      <CardContainer>
        <CardImg>
          <Img src={image} alt={name} />
        </CardImg>
        <CardName>{name}</CardName>
      </CardContainer>
    </CardMain>
  );
  // ));

  // return <CardMain>{resultArray}</CardMain>;
};

export default CardPokemon;
