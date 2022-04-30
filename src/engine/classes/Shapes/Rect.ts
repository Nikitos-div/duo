import { RectConfig } from 'konva/lib/shapes/Rect'
import Shape from './Shape'

class Rect extends Shape<Rect, RectConfig> { 
    constructor(config: RectConfig) {
        super('Rect', config)
    }
}

export default Rect