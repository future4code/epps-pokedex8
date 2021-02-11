import React, { useContext, useEffect } from "react";
import { CardMain } from "../Components/CardPokemon/styled";
import CardPokemon from "../Components/CardPokemon/CardPokemon";
import GlobalStateContext from "../Global/GlobalStateContext";
import { PokeballButton, Loading, PokeballAnimation } from "./styles";

const HomePage = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);

  useEffect(() => {
    requests.getPokemons();
  }, [states, setters, requests]);

  return (
    <>
      <CardMain>
        {states.pokemonsHome.length === 0 ? (
          <Loading>
            <PokeballAnimation>
              <PokeballButton />
            </PokeballAnimation>
            <p>Carregando...</p>
          </Loading>
        ) : (
          states.pokemonsHome.map((pokemon) => {
            return (
              <CardPokemon
                key={pokemon.id}
                image={pokemon.sprites.front_default}
                name={pokemon.name}
                pokemon={pokemon}
              />
            );
          })
        )}
      </CardMain>
    </>
  );
};

export default HomePage;
