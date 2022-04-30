import React, {useRef, useEffect} from 'react'
import useInitEngine from '../../../hooks/useInitEngine'


const Canvas = () => {
    const reference = useRef(null)
    const engine = useInitEngine(reference)
    
    return (
        <>
           <div ref={reference} id='container'></div>
        </>
    )
}

export default Canvas