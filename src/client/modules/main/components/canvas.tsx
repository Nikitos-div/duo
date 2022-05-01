import React, {useRef} from 'react'
import useInitEngine from '../../../hooks/useInitEngine'
// import ControllersContainer from '../../../components/Controllers/Container'
import ContainerWrapper  from './ContainerWrapper'
import './canvas.scss'



const Canvas = () => {
    const reference = useRef(null)
    const engine = useInitEngine(reference)
   
    return (
        <div className='canvas-container'>
           <div ref={reference} id='container'></div>
           {engine && <ContainerWrapper createHandler={engine.createShape.bind(engine)}/>}
        </div>
    )
}

export default Canvas