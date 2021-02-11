import React, { useContext, useEffect } from "react";
import { CardMain } from '../Components/CardPokemon/styled'
import CardPokemon from "../Components/CardPokemon/CardPokemon";
import GlobalStateContext from "../Global/GlobalStateContext";


const HomePage = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);

  useEffect(() => {
    requests.getPokemons();
  }, [states, setters, requests]);


  // const addToPokedex = (newPokemon) => {
  //   const index = states.pokemonsHome.findIndex((i) => i.id === newPokemon.id);
  //   const newPokedex = [...states.pokedexList, newPokemon];
  //   setters.setPokedexList(newPokedex);
  //   states.pokemonsHome.splice(index, 1);
  // };

  return (
    <>
      <CardMain>
      {states.pokemonsHome.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        states.pokemonsHome.map((pokemon) => {
          return (
              <CardPokemon
                key={pokemon.id}
                image={pokemon.sprites.front_default}
                name={pokemon.name}
                pokemon={pokemon}
                // addToPokedex={() => addToPokedex(pokemon)}
              />
          );
        })
      )}
      </CardMain>
      
    </>
  );
};

export default HomePage;
