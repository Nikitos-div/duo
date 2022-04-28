import Shape from "../classes/Shapes/Shape"

interface Element { 
    uuid: string;
    shape: Shape
}


interface Storage {
    [field: string]: Shape
}
class Store {
    private _data: {} = {}
    private _handlers: any = {}
    private _store : Storage;
    constructor() {
        const proxyObject = new Proxy(this._data, this._handlers)
        this._store = proxyObject
    }
    add({uuid, shape}: Element) {
        this._store[uuid] = shape
    }
    
    getElementById(uuid: string): Shape {
        return this._store[uuid]
    }

    updateElementById() {
        // soon
    }
    
    deleteElementById(uuid: string): void {
        // soon
        delete this._store[uuid]
    }
}



export default Store