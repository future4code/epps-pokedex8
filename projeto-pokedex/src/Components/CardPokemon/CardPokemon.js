import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { goToPokeDetails } from "../../Router/Coordinator";
import ButtonProps from "../Buttons/Button";
import { CardContainer, CardImg, CardName, Img, CardButton } from "./styled";

const CardPokemon = (props) => {
  const { states, setters, requests } = useContext(GlobalStateContext);
  const { image, name } = props;
  const history = useHistory();

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


  const ButtonProps =
    history.location.pathname === "/" ? (
      <ButtonProps
        title="ADD"
        bgColor="#a02dff"
        radiusL="20px"
        functionButton={() => addToPokedex(props.pokemon)}
      />
    ) : (
      <ButtonProps
        title="REMOVE"
        bgColor="#a02dff"
        radiusL="20px"
        functionButton={() => removeFromPokedex(props.pokemon)}
      />
    );

  return (
    <CardContainer>
      <CardImg>
        <Img src={image} alt={name} />
      </CardImg>
      <CardName>{name}</CardName>
      <CardButton>
        {ButtonProps}
        <ButtonProps
          title="INFO"
          bgColor="#000065"
          radiusR="20px"
          pokemon={props.pokemon}
          goToPage={() => goToPokeDetails(history)}
        />
      </CardButton>
    </CardContainer>
  );
};

export default CardPokemon;
