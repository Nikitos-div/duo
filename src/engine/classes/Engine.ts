import Konva from 'konva'
import { Layer, LayerConfig } from 'konva/lib/Layer';
import Shape from './Shapes/Shape'
import { Stage } from 'konva/lib/Stage'
import { ShapeConfigFacade } from '../types';
import { v4  } from 'uuid';
import Store from '../store';

interface EngineConfig {
    container: string;
    width: number | undefined;
    height: number | undefined;
}

class Engine {
    stage: Stage;
    layer: Layer;
    store: Store;
    constructor(config: EngineConfig, layerConfig?:LayerConfig) {
        this.stage = new Konva.Stage(config)
        this.layer = new Konva.Layer(layerConfig)
        this.stage.add(this.layer)
        this.store = new Store()
    }
    createShape(shapeName: string, shapeConfig: ShapeConfigFacade) {
        const shape = new Shape(shapeName, shapeConfig)
        const uuid = v4()
        this.layer.add(shape.shape)
        this.store.add({uuid, shape})
    }
}



export default Engine