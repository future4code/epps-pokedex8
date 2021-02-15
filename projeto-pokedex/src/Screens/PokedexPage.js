import React, { useContext } from "react";
import { CardMain } from "../Components/CardPokemon/styled";
import CardPokemon from "../Components/CardPokemon/CardPokemon";
import GlobalStateContext from "../Global/GlobalStateContext";
import { Loading, PokeballButton, PokeballAnimation } from "./styles";

const PokedexPage = () => {
  const { states } = useContext(GlobalStateContext);

  return (
    <div>
      <CardMain>
        {states.pokedexList.length === 0 ? (
          <Loading>
            <PokeballAnimation>
              <PokeballButton />
            </PokeballAnimation>
            <p>Carregando...</p>
          </Loading>
        ) : (
          states.pokedexList.map((pokemon) => {
            return (
              <CardPokemon
                key={pokemon.id}
                image={pokemon.sprites.front_default}
                name={pokemon.name}
                pokemon={pokemon}
                id={pokemon.id}
              />
            );
          })
        )}
      </CardMain>
    </div>
  );
};

export default PokedexPage;
