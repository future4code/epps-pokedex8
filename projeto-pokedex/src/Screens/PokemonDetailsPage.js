import React, { useEffect, useContext } from "react";
import {
  ImageOne,
  ContainerContent,
  ContainerDetails,
  ContainerType,
  DivType,
  DivMove,
  Front,
  Back,
  Image,
  HeaderDetails,
  ContainerPokemon,
  Progress,
} from "./styles";
import { BASE_URL } from "../Constant/Constant";
import axios from "axios";
import GlobalStateContext from "../Global/GlobalStateContext";
import { useParams } from "react-router-dom";

const PokemonDetailsPage = () => {
  const params = useParams();
  const { states, setters, requests } = useContext(GlobalStateContext);

  const detailsPokemon = () => {
    axios
      .get(`${BASE_URL}${params.id}`)
      .then((res) => {
        setters.setName(res.data.species.name);
        setters.setStats(res.data.stats);
        setters.setTypes(res.data.types);
        setters.setMoves(res.data.moves);
        setters.setImage(res.data.sprites);
        setters.setPokemon(res.data);
        console.log(res.data.id);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    detailsPokemon();
  }, []);

  useEffect(() => {
    requests.getPokemons();
  }, [states, setters, requests]);

  const removeOrAdd = (newPokemon) => {
    if (states.pokedexList.findIndex((item) => item.id === newPokemon.id)) {
      removeFromPokedex(newPokemon);
    } else {
      addToPokedex(newPokemon);
    }
  };

  const addToPokedex = (newPokemon) => {
    const index = states.pokemonsHome.findIndex((i) => i.id === newPokemon.id);
    const newPokedex = [...states.pokedexList, newPokemon];
    setters.setPokedexList(newPokedex);
    states.pokemonsHome.splice(index, 1);
  };

  const removeFromPokedex = (newPokemon) => {
    const index = states.pokedexList.findIndex((i) => i.id === newPokemon.id);
    const newPokedex = [...states.pokemonsHome, newPokemon];
    setters.setPokemonsHome(newPokedex);
    states.pokedexList.splice(index, 1);
  };

  let movesThree = states.moves.slice(0, 3);

  return (
    <ContainerContent>
      <HeaderDetails>
        <button
          type="button"
          class="nes-btn is-success"
          onClick={() => {
            removeOrAdd(states.pokemon);
          }}
        >
          Adicionar / Remover da Pokedex
        </button>
      </HeaderDetails>
      <ContainerPokemon>
        <ImageOne>
          <Front>
            <h1>{states.name}</h1>
            <Image src={states.image.front_default} />
          </Front>

          <Back>
            <h1>{states.name}</h1>
            <Image src={states.image.back_default} />
          </Back>
        </ImageOne>

        <div>
          <ContainerDetails>
            <h4>Stats</h4>
            {states.stats.map((stat) => {
              return (
                <div>
                  <h5>
                    {stat.stat.name}: {stat.base_stat}
                  </h5>
                  <Progress value={stat.base_stat} max="100"></Progress>
                </div>
              );
            })}
          </ContainerDetails>

          <ContainerType>
            <DivType>
              {states.types.map((type) => {
                return <h3>{type.type.name}</h3>;
              })}
            </DivType>

            <DivMove>
              {movesThree.map((movesT) => {
                return <h3>{movesT.move.name}</h3>;
              })}
            </DivMove>
          </ContainerType>
        </div>
      </ContainerPokemon>
    </ContainerContent>
  );
};

export default PokemonDetailsPage;
