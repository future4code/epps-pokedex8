import { useHistory, useLocation } from "react-router-dom";
import { goToHome, goToPokedex } from "../Router/Coordinator";

const useLocationPath = () => {
  const history = useHistory()
  let location = useLocation();

  if (location.pathname === "/") {
    return (
      <button
        type="button"
        class="nes-btn is-primary"
        onClick={() => goToPokedex(history)}
      >
        Lista de Pokedex
      </button>
    );
  } else if (location.pathname === "/pokedex") {
    return (
      <button
        type="button"
        class="nes-btn is-primary"
        onClick={() => goToHome(history)}
      >
        Minha Pokedex
      </button>
    );
  } else if (location.pathname === "/pokemon-details") {
    return (
      <button
        type="button"
        class="nes-btn is-primary"
        onClick={() => goToHome(history)}
      >
        Minha Pokedex
      </button>
    );
  } else {
    return (
      <button
        type="button"
        class="nes-btn is-primary"
        onClick={() => goToHome(history)}
      >
        Minha Pokedex
      </button>
    );
  }
};

export default useLocationPath;
