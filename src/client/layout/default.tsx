import React, { ReactElement } from "react"
import './styles.scss'

interface DefaultLayoutProps {
    children?: ReactElement | ReactElement[]
}

const Layout = ({children}: DefaultLayoutProps) => {

    return (
        <main className="layout">
           {children}
        </main>
    )
}


export default Layout