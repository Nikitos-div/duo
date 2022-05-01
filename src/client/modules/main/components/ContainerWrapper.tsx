import ControllersContainer from '../../../components/Container/Container'
import React from 'react'
import Controller from '../../../components/Controller/Controller'


interface ContainerWrapperProps {
    create: (typeOfShape: string, config: unknown) => void 
}

const defaults = {
    x: 20,
    y: 20,
    width: 100,
    height: 50,
    fill: 'transparent',
    stroke: 'black',
    strokeWidth: 2,
    draggable: true,
}

const ContainerWrapper = ({create}: ContainerWrapperProps) => {
    
    
    return (
        <ControllersContainer position='absolute' styles={{
            left: 10,
            top: '40%',
        }}>
            <Controller onClickHandler={() => create('Rect', defaults)}>
                1
            </Controller> 
            <Controller  onClickHandler={() => create('Circle', defaults)}>
                2
            </Controller> 
            <Controller  onClickHandler={() => create('Circle', defaults)}>
                2
            </Controller> 
            
        </ControllersContainer>
    )
}

export default ContainerWrapper