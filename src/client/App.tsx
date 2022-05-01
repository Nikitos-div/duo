import React from 'react'
import Layout  from './layout/default'
import MainPage from './modules/main/main'


import './app.scss'

const App = () => {
    return (
        <> 
            <Layout>
               <MainPage/>
            </Layout>
        </>
    )
}

export default App