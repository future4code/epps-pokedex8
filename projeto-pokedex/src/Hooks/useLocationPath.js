import { useHistory, useLocation } from "react-router-dom";
import Button from "../Components/ButtonHeader/Button";
import { goToHome, goToPokedex } from "../Router/Coordinator";

const useLocationPath = () => {
  
  const ButtonHome = <Button title="Lista de Pokemons" goTo={() => goToHome(history)} />
  const ButtonPokedex = <Button title="Minha Pokedex" goTo={() => goToPokedex(history)} />

  const history = useHistory();
  let location = useLocation();

  if (location.pathname === "/") {
    return ButtonPokedex;
  } else if (location.pathname === "/pokedex") {
    return ButtonHome;
  } else if (location.pathname === "/pokemon-details") {
    return ButtonHome;
  } else {
    return ButtonHome;
  }
};

export default useLocationPath;
