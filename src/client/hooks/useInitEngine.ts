import { RefObject, useState, useEffect } from "react"
import Engine from '../../engine/index'

const useInitEngine = (ref: RefObject<HTMLDivElement>): Engine => {
    const [engine, setEngine] = useState<Engine | null>()
    

    useEffect(()=> {
        if (ref.current !== null) {       
            const engine = new Engine({width: 500, height: 500, container: ref.current })
            setEngine(engine)   
        }
    }, [ref])


    return engine as Engine
}

export default useInitEngine