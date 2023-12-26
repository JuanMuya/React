import React from "react"

import ItemCaunt from "./ItemCaunt"
import Navbar from "./Navbar"

import { Button, ButtonGroup } from '@chakra-ui/react'
import ItemListContainer from './ItemListContainer'
import Item from "./Item"


const App = () => {
  return (
    <div>
      <Navbar />
      <Button />
      <ItemListContainer greeting={"Bienvenidos a la página"} />
      <Item />


      <ItemCaunt />


    </div>
  )
}

export default App