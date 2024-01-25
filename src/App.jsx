import React from "react"
import { useState, useEffect } from "react"
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

import ComponenteVisible from "./components/ComponenteVisible"
import UsuarioLogueado from "./components/UsuarioLogueado"
import UsuarioNoLogueado from "./components/UsuarioNoLogueado"
import CartWidget from "./CartWidget"
import Loader from "./components/Loader"







const App = () => {

  {/* const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setProductos(["Producto A", "Producto B", "Producto C"])
      setLoading(false)
    }, 5000)

  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <h1>Listado de Productos</h1>
      <ul>
        {productos.map((p) => (
          <li> {p} </li>
        ))}
      </ul>
    </>
  )  */}




  //1 Renderizado condicional basado en una expresion
  const isVisible = true

  //2 Renderizado condicional bsado en operador ternario
  // const logueado = true

  //3 Renderizado condicional basado en un operador lógico
  // const [mensaje, setMensaje] = useState("")

  //4 Renderizado condicional basado en el estado de un componente
  // const cart = ["A", "B", "C"]






  return (
    <>
         {isVisible && <Cart />}

      {/*  //2 {logueado ? <UsuarioLogueado /> : <UsuarioNoLogueado />}  */}


      {/*  {mensaje ? <h1>{mensaje} </h1> : <h2>No hay mensajes </h2>}
      <button onClick={() => setMensaje("Mensaje cambiado")}> Cambiar </button> */}

      {/* {cart.length > 0 ? <h1>Hay elementos en el carrito</h1> : <h2>Carrito vacío</h2>} */}

      {/* {cart.length > 0 ? <CartWidget /> : <h2>Carrito vacío</h2>} */}



      {/*   <Loader />   */}


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

    </>
  )




}

export default App