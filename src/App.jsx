import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"


import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer"

import About from "./components/About"
import ContactUs from "./components/ContactUs"

import Cart from "./components/Cart"
import Form from "./components/Form"

import ShoppingCartContext from "./context/ShoppingCartContext"
import ComponenteSub from "./components/ComponenteSub"







const App = () => {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path='/' element={<ItemListContainer />} />
        <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route exact path='/producto/:id' element={<ItemDetailContainer />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<ContactUs />} />
        <Route exact path='/cart' element={<Cart />} />


      </Routes>
      <Form />

      <ShoppingCartContext>
        <ComponenteSub />
        <Cart />
      </ShoppingCartContext>

    </BrowserRouter>
  )
}

export default App