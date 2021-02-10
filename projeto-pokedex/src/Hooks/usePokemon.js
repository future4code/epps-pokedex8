import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../Constant/Constant";

const usePokemon = () => {

  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios
    .get(BASE_URL)
    .then((res) => {
      setPokemons(res.data);
    })
    .catch((err) => {});
  }

  return pokemons;
};

export default usePokemon;
