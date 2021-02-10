import React from "react";
import Header from "../Components/Header/Header";
import { CardMain } from "../Components/CardPokemon/styled";

const PokedexPage = () => {
  return (
    <div>
      <Header />
      <CardMain>
        {/* <CardPokemon img={IMG_TESTE} name="Bulbasaur - Z" /> */}
      </CardMain>
    </div>
  );
};

export default PokedexPage;
