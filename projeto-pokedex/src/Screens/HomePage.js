import React from "react";
import Header from "../Components/Header/Header";
import CardPokemon from "../Components/CardPokemon/CardPokemon";
import { IMG_TESTE } from "../Constant/Constant";

const HomePage = () => {
  return (
    <div>
      <Header />
      <CardPokemon img={IMG_TESTE} name="Bulbasaur" />
    </div>
  );
};

export default HomePage;
