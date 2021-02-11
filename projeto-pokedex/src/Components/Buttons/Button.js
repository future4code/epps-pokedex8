import { Button } from './styled'

function ButtonProps(props) {
    return <Button 
                bgColor={props.bgColor}
                radiusBL={props.radiusL}
                radiusBR={props.radiusR}
                // onClick={props.goToPage}
                onClick={props.functionButton}
            > {props.title} </Button>
}

export default ButtonProps