import Circle from './Circle'
import Rect from './Rect'
type TODO = any
interface Shapes {
    [field: string]: <T>(config: T) => TODO
}


const shapes: Shapes = {
    Rect: <RectConfig>(rectConfig: RectConfig)=> new Rect(rectConfig), 
    Circle: <CircleConfig>(circleConfig: CircleConfig) => new Circle(circleConfig)
}

export default shapes