
import { Button } from "./styled";

function ButtonProps(props) {
  return (
    <Button 
      type="button"
      onClick={props.goTo}
      titleContent={props.title}
    >
      {props.title}
    </Button>
  );
}

export default ButtonProps;
