import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Product from './Product'
import Navbarr from './Navbarr'
import NB from './NB'
import Error from './Error'

function DynamicPage() {
  return (
    <div>
    <NB/>
            <Routes>
                    <Route index element = <Navbarr/> path='/Navbarr' />
                    <Route path='/about' element={<About/>} />
                    <Route path='/product' element={<Product/>} />
                    {/* <Route path='/Navbarr' element={<Navbarr/>} /> */}
                    <Route path='/' element={<Navbarr/>} />
                    <Route path='*' element = {<Error/>} />
            </Routes>
            
    </div>
  )
}

export default DynamicPage