import { CircleConfig } from 'konva/lib/shapes/Circle'
import Shape from './Shape'

class Circle extends Shape<Circle, CircleConfig> { 
    constructor(config: CircleConfig) {
        super('Circle', config)
    }
}

export default Circle