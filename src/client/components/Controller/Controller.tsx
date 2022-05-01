import React, { ReactNode } from 'react'
import './controller.scss'

interface ControllerProps {
    onClickHandler?: Function,
    children?: ReactNode | ReactNode[]
}

const Controller = ({onClickHandler, children}: ControllerProps) => {
    return (
        <button className='controller' onClick={() => onClickHandler && onClickHandler()}>
            {children}
        </button>
    ) 
}


export default Controller 