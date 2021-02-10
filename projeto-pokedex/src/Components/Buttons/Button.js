import { Button } from './styled'

function ButtonProps(props) {
    return <Button 
                bgColor={props.bgColor}
                radiusBL={props.radiusL}
                radiusBR={props.radiusR}
            
            > {props.title} </Button>
}

export default ButtonProps