import ControllersContainer from '../../../components/Container/Container'
import React from 'react'
import Controller from '../../../components/Controller/Controller'


interface ContainerWrapperProps {
    createHandler: (typeOfShape: string, config: unknown) => void 
}


const ContainerWrapper = ({createHandler}: ContainerWrapperProps) => {
    
    
    return (
        <ControllersContainer position='absolute' styles={{
            left: 10,
            top: '40%',
        }}>
            <Controller>
                1
            </Controller> 
            <Controller>
                2
            </Controller> 
            

        </ControllersContainer>
    )
}

export default ContainerWrapper