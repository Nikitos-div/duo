import { ShapeConfigFacade, ShapeFacade } from "../../types";
import figureTable from "./figureTable";



class Shape { 
    shape: ShapeFacade; // rect/ circle / etc 
    constructor(shapeName: string, shapeConfig: ShapeConfigFacade) {
        this.shape = figureTable[shapeName](shapeConfig)
    }
}

export default Shape
