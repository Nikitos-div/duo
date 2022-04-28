import Konva from 'konva'
import { Layer, LayerConfig } from 'konva/lib/Layer';
import Shape from './Shapes/Shape'
import { Stage } from 'konva/lib/Stage'
import { ShapeConfigFacade } from '../types';
import { v4  } from 'uuid';

interface EngineConfig {
    container: string;
    width: number | undefined;
    height: number | undefined;
}
// type TODO = any
class Engine {
    stage: Stage;
    layer: Layer;
    constructor(config: EngineConfig, layerConfig?:LayerConfig) {
        this.stage = new Konva.Stage(config)
        this.layer = new Konva.Layer(layerConfig)
        this.stage.add(this.layer)
    }
    createShape(shapeName: string, shapeConfig: ShapeConfigFacade) {
        const shape = new Shape(shapeName, shapeConfig)
        const uuid = v4()
        // add to store 
        // add to layer 

    }
}



export default Engine