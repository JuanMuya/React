import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import ItemCaunt from "./ItemCaunt"
import Navbar from "./Navbar"

import { Button, ButtonGroup } from '@chakra-ui/react'
import ItemListContainer from './ItemListContainer'

import ItemDetailContainer from "./components/ItemDetailContainer"
import CounterComponent from "./components/CounterComponent"
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import CartWidget from "./CartWidget"
import Cart from "./components/Cart"







const App = () => {
  return (
    <div>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<ContactUs />} />
          <Route exact path='/cart' element={<Cart />} />


        </Routes>



      </BrowserRouter>


      <Button />
      <ItemListContainer greeting={"Bienvenidos a la página"} />
      {/*<ItemDetailContainer /> */}

      <CounterComponent />

      <ItemCaunt />


    </div>
  )
}

export default App