import React, { ReactNode } from 'react'
import './container.scss'
import cl from 'classnames'

interface ContainerProps {
    children?: ReactNode | ReactNode[],
    position?: 'absolute' | 'fixed' | 'static',
    styles?: any
}

const Container = ({children, position, styles}: ContainerProps) => {
    return (
        <div className={cl('controllers-container',{ [`position_${position}`]: position ? true : false })} style={styles}>
            {children}
        </div>
    )
}



export default Container