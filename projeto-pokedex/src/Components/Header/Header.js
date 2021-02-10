import React from "react";
import { useHistory } from "react-router-dom";
import { goToPokedex } from "../../Router/Coordinator";
import pokelogo from "../../assets/pokedex.png";
import { HeaderContainer, LogoContainer, Logo } from "./styled";

const Header = () => {
  const history = useHistory();
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={pokelogo} alt="logo" />
      </LogoContainer>
      <LogoContainer>
        <button
          type="button"
          class="nes-btn is-primary"
          onClick={() => goToPokedex(history)}
        >
          Minha Pokedex
        </button>
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;
