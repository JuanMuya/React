import React from "react"

import ItemCaunt from "./ItemCaunt"
import Navbar from "./Navbar"

import { Button, ButtonGroup } from '@chakra-ui/react'
import ItemListContainer from './ItemListContainer'

import ItemDetailContainer from "./components/ItemDetailContainer"






const App = () => {
  return (
    <div>
      <Navbar />
      <Button />
      <ItemListContainer greeting={"Bienvenidos a la página"} />
      <ItemDetailContainer />


      <ItemCaunt />


    </div>
  )
}

export default App