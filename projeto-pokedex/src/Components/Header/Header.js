import React from "react";
import { useHistory } from "react-router-dom";
import { goToHome, goToPokedex } from "../../Router/Coordinator";
import pokelogo from "../../Img/pokedex.png";
import { HeaderContainer, LogoContainer, Logo } from "./styled";

const Header = () => {
  const history = useHistory();
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={pokelogo} alt="logo" onClick={() => goToHome(history)} />
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
