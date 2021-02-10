import  { Button } from './styled'

const ButtonRemove = () => {
  return (
    <>
      <Button class="btn icon-btn btn-warning" href="#">
        <span class="glyphicon btn-glyphicon glyphicon-minus img-circle text-warning"></span>
        Remove
      </Button>
    </>
  );
};

export default ButtonRemove;
