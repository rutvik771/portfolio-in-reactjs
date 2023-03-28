import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Routing } from '../../Routing'
import { Footer } from '../footer/Footer'


export const Layout = () => {
  return (
    <div>  
        <Navbar/>
        <Routing/>
        <Footer/>
    </div>
  )
}
