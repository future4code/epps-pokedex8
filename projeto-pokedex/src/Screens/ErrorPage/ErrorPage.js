import { ErrorContainer, ErrorMain, ImageError, Button } from "./styled";
import ImageErrorBg from "../../assets/imageErrorPage.png";
import { goToPokedex } from "../../Router/Coordinator";
import { useHistory } from "react-router-dom";

export default function ErrorPage() {

  const history = useHistory();
  
  return (
    <>
      <ErrorMain>
        <ErrorContainer>
          <ImageError src={ImageErrorBg} alt="Alguma coisa" />
          <Button onClick={() => goToPokedex(history)}>
            VEJA TODOS OS POKEMONS
          </Button>
        </ErrorContainer>
      </ErrorMain>
    </>
  );
}
