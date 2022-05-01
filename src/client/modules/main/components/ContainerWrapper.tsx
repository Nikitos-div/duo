import ControllersContainer from '../../../components/Controllers/Container'
import React from 'react'



interface ContainerWrapperProps {
    createHandler: (typeOfShape: string, config: unknown) => void 
}


const ContainerWrapper = ({createHandler}: ContainerWrapperProps) => {
    
    console.log(createHandler)
    return (
        <ControllersContainer position='absolute' styles={{
            left: 10,
            top: '40%',
        }}>
            

        </ControllersContainer>
    )
}

export default ContainerWrapper