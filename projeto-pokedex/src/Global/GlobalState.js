import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Constant/Constant";
import GlobalStateContext from "./GlobalStateContext";
import useRequestData from "../Hooks/useRequestData";

const GlobalState = (props) => {
  const [pokedexList, setPokedexList] = useState([]);
  const [pokemonsHome, setPokemonsHome] = useState([]);
  const pokemonsName = useRequestData(BASE_URL, []);

  const getPokemons = async () => {
    let detailsArray = [];
    try {
      for (const pokemon of pokemonsName) {
        const response = await axios.get(`${BASE_URL}${pokemon.name}`);
        detailsArray.push(response.data);
      }
    } catch (error) {
      console.log(error);
    }

    if (pokemonsHome.length === 0 && pokedexList.length === 0) {
      setPokemonsHome(detailsArray);
    }
  };

  const states = { pokemonsHome, pokedexList };
  const setters = { setPokemonsHome, setPokedexList };
  const requests = { getPokemons };
  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
