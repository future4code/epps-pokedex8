import React, {  useEffect, useContext } from "react";
import styled from "styled-components";
import { BASE_URL } from "../Constant/Constant";
import axios from "axios"
import GlobalStateContext from "../Global/GlobalStateContext";
import { useParams, useHistory } from "react-router-dom";
import { goToBack } from "../Router/Coordinator"

const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-family: "Lato";
  margin: 0;

`;
const ContainerDetails = styled.div`
  width: 30vw;
  height: 50vh;
  margin: 30px;
  color: #ffffff;
  font-size: 20px;
  background-color: #423d94;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 3px 15px rgb(100 100 100 / 50%);
  &:hover {
    transition: transform 1s;
    transform: scale(1.01);
  }
`;
const ContainerType = styled.div`
  width: 30vw;
  height: 38vh;
  margin: 30px;
  font-size: 20px;
  color: #423d94;
  background-color: #3f3c93;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 3px 15px rgb(100 100 100 / 50%);
  background-color: #a3f3ce;
  &:hover {
    transition: transform 1s;
    transform: scale(1.01);
  }
`;
const ImageOne = styled.div`
  margin: 40px;
  color: #423d94;
  background-color: #72c09d;
  box-shadow: 0 3px 18px rgb(100 100 100 / 50%);
  width: 22vw;
  height: 62vh;
  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;
  border-radius: 10px;
  &:hover {
    transform: rotateY(180deg);
    transition: transform 1s;
  }
`;
const DivType = styled.div`
  margin: 10px;
  border-radius: 10px;
  padding: 20px;
  background-color: #d6f9eb;
  
`;
const DivMove = styled.div`
  margin: 10px;
  border-radius: 10px;
  padding: 20px;
  background-color: #d6f9eb;
`;
const Front = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px;
  width: 25vw;
  box-shadow: 0 3px 18px rgb(100 100 100 / 50%);
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;
const Back = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px;
  width: 25vw;
  box-shadow: 0 3px 18px rgb(100 100 100 / 50%);
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
const Image = styled.img`
  border-radius: 350px;
  width: 15vw;
  margin-bottom: 25px;
  background-color: #D6F9EB;
`;
const HeaderDetails = styled.div`
  height: 10vh;
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 2px #dedede; 
  padding: 0 35px;
`
const ContainerPokemon = styled.div`
  display: flex;
  align-items: center;
`
const Progress = styled.progress`
  width: 27.5vw;
  height: 3vh;
`
const PokemonDetailsPage = () => {
  const params = useParams()
  const history = useHistory()
  const { states, setters, requests } = useContext(GlobalStateContext);


  const detailsPokemon = () => {
    axios
      .get(`${BASE_URL}${params.id}`)
      .then((res) => {
        setters.setName(res.data.species.name)
        setters.setStats(res.data.stats);
        setters.setTypes(res.data.types)
        setters.setMoves(res.data.moves)
        setters.setImage(res.data.sprites)
        setters.setPokemon(res.data)
        console.log(res.data.id)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    detailsPokemon()
  }, [])

  useEffect(() => {
    requests.getPokemons();
  }, [states, setters, requests]);



  const removeOrAdd = (newPokemon) => {

    if (states.pokedexList.findIndex((item) => item.id === newPokemon.id)) {
      console.log("Chamei a função")
      removeFromPokedex(newPokemon)
    } else {
      console.log("Vou remover da pokedex")
      addToPokedex(newPokemon)
    }
  }

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
    states.pokedexList.splice(0, 1);
  };

  let movesThree = states.moves.slice(0, 3)

  return (
    <ContainerContent>

      <HeaderDetails>
        <button type="button" class="nes-btn is-primary" onClick={() => { goToBack(history) }}> Voltar</button>
        <h1>{states.name}</h1>
        <button type="button" class="nes-btn is-success" onClick={() => { removeOrAdd(states.pokemon) }}>Adicionar/RemoverPokedex</button>
      </HeaderDetails>
      <ContainerPokemon>
        <ImageOne>

          <Front>
            <h1 >{states.name}</h1 >
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
                  <h5>{stat.stat.name}: {stat.base_stat}</h5>
                  <Progress value={stat.base_stat} max="100"></Progress>

                </div>
              )
            })}

          </ContainerDetails>

          <ContainerType>
            <DivType>
              {states.types.map((type) => {
                return (<h3>{type.type.name}</h3>);
              })}
            </DivType>

            <DivMove>
              {movesThree.map((movesT) => {
                return (
                  <h3>{movesT.move.name}</h3>)
              })}

            </DivMove>
          </ContainerType>
        </div>
      </ContainerPokemon>
    </ContainerContent>
  );
};

export default PokemonDetailsPage;
