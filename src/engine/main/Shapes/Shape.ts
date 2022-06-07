import Konva from "konva";
interface FacadeTable {
    [field: string]: <T, U>(config: T) => U
}

const facadeTable: FacadeTable = {
    Rect: <RectConfig, RectWrapper>(config: RectConfig): RectWrapper => new Konva.Rect(config) as unknown as RectWrapper,
    Circle: <CircleConfig, CircleWrapper>(config: CircleConfig): CircleWrapper => new Konva.Circle(config) as unknown as CircleWrapper
};



abstract class Shape<T, U> { 
    shape: T; // rect/ circle / etc 
    constructor(shapeName: string, shapeConfig: U) {
        this.shape = facadeTable[shapeName](shapeConfig)
    }
}

export default Shape
