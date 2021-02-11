import React, { useContext } from "react";
import { CardMain } from "../Components/CardPokemon/styled";
import CardPokemon from "../Components/CardPokemon/CardPokemon";
import GlobalStateContext from "../Global/GlobalStateContext";

const PokedexPage = () => {
  const { states, setters } = useContext(GlobalStateContext);

  const removeFromPokedex = (newPokemon) => {
    const index = states.pokedexList.findIndex((i) => i.id === newPokemon.id);
    const newPokedex = [...states.pokemonsHome, newPokemon];
    setters.setPokemonsHome(newPokedex);
    states.pokedexList.splice(index, 1);
  };

  return (
    <div>
      <CardMain>
        {states.pokedexList.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          states.pokedexList.map((pokemon) => {
            return (
              <CardPokemon
                key={pokemon.id}
                image={pokemon.sprites.front_default}
                name={pokemon.name}
                removeFromPokedex={() => removeFromPokedex(pokemon)}
              />
            );
          })
        )}
      </CardMain>
    </div>
  );
};

export default PokedexPage;
