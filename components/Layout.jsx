import React from 'react'
import { Navbar } from './NavBar'
import { Outlet, ScrollRestoration} from 'react-router-dom'

export const Layout = () => {
  return (
    <>  
        <ScrollRestoration />
        <Navbar/>
        <main className="flex flex-col w-full p-2 py-8 md:p-16 items-center gap-4">
            <Outlet/> {/* é aqui que as rotas filhas dentro do router vão ser renderizadas ficam */}
        </main>
    </>
  )
}

