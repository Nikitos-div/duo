import Konva from 'konva'
import { Layer, LayerConfig } from 'konva/lib/Layer';
import Shapes from './Shapes/index'
import { Stage } from 'konva/lib/Stage'
import createSelectionRectangle from '../utils/createSelectionRectangle';
import { v4  } from 'uuid';
import Store from '../store';
import { Transform } from 'konva/lib/Util';


// const initStageEvents = (stage: Stage): void => {
   
// }




const createTransformer = (): Transform => {
    return new Konva.Transform()
}











interface EngineConfig {
    container: string | HTMLDivElement;
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
        const transformer = createTransformer()
        // @ts-ignore  tech debt
        this.layer.add(transformer)
        this.stage.add(this.layer)
        this.store = new Store()


        const selectionRectangle = createSelectionRectangle()
        
        this.layer.add(selectionRectangle)
        Engine.initStageEvents(this.stage)
        
        
    }
    createShape(shapeName: string, config: unknown) {
        const shape = Shapes[shapeName](config)
        const uuid = v4()
        this.layer.add(shape.shape)
        console.log(shape)
        this.store.add({uuid, shape})
    }
    static initStageEvents(stage: Stage) {

    }
}



export default Engine