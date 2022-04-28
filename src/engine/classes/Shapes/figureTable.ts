import Konva from "konva";
import { ShapeConfigFacade, ShapeFacade } from "../../types";
// костыль
interface FigureTable {
    [field: string]: (config: ShapeConfigFacade) => ShapeFacade
}

const figureTable: FigureTable = {
    Rect: <T>(config: T) => new Konva.Rect(config)
};

export default figureTable