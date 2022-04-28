import Konva from "konva";
import { ShapeConfigFacade, ShapeFacade } from "../../types";
// костыль
interface FigureTable {
    [field: string]: (config: ShapeConfigFacade) => ShapeFacade
}

const figureTable: FigureTable = {
    Rect: (config) => new Konva.Rect(config)
};

export default figureTable