

type TODO = any
interface Element { 
    uuid: string;
    shape: unknown
}


interface Storage {
    [field: string]: TODO
}
class Store {
    private _data: {} = {}
    private _handlers: TODO = {}
    private _store : Storage;
    constructor() {
        const proxyObject = new Proxy(this._data, this._handlers)
        this._store = proxyObject
    }
    add({uuid, shape}: Element) {
        this._store[uuid] = shape
    }
    
    getElementById(uuid: string): TODO {
        return this._store[uuid]
    }

    updateElementById(id: string) {
        // soon
    }
    
    deleteElementById(uuid: string): void {
        // soon
        delete this._store[uuid]
    }
}



export default Store