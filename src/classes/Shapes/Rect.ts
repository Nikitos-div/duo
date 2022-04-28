
import { ShapeConfigFacade } from '../../types'
import Shape from './Shape'

class Rect extends Shape { 
    constructor(config: ShapeConfigFacade) {
        super('Rect', config)
    }
}

export default Rect