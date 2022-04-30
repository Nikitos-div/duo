import React, { ReactElement } from "react"
import './styles.scss'

interface DefaultLayoutProps {
    children?: ReactElement | ReactElement[]
}

const Layout = ({children}: DefaultLayoutProps) => {

    return (
        <main>
           {children}
        </main>
    )
}


export default Layout