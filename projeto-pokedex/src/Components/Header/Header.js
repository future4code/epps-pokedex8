import React from "react";
import { useHistory } from "react-router-dom";
import { goToHome } from "../../Router/Coordinator";
import pokelogo from "../../assets/pokedex.png";
import { HeaderContainer, LogoContainer, Logo } from "./styled";
import useLocationPath from "../../Hooks/useLocationPath";

const Header = () => {
  const history = useHistory();
  const location = useLocationPath();

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={pokelogo} alt="logo" onClick={() => goToHome(history)} />
      </LogoContainer>
      <LogoContainer>{location}</LogoContainer>
    </HeaderContainer>
  );
};

export default Header;
