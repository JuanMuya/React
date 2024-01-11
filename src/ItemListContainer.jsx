import React, { useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const { categoriaId } = useParams()


  const producos = [
    { id: 1, titulo: "Camisetas normales", description: "100% Algodón", precio: 890, categoria: "A" },
    { id: 2, titulo: "Camisetas raras", description: "100% Algodón con estampas", precio: 1340, categoria: "B" },
    { id: 3, titulo: "Juguetes", description: "Figuras coleccionables", precio: 550, categoria: "C" }
  ]

  const verProducos = new Promise((resolve, reject) => {

    if (productos.length > 0) {
      setTimeout(() => {
        resolve(producos)
      }, 550)
    } else {
      reject("No se obtuvo resultado")
    }
  })

  verProducos
    .then((resultado) => {
      console.log(resultado)
    })
    .catch((error) => {
      console.log(error)
    })


 

  return (
    <div>
      <ItemList productos={producos} />
    </div>

  )




  const descuentoAplicado = new Promise((resolve, reject) => {
    const descuento = true

    if (descuento) {
      resolve("Descuento Aplicado")
    } else {
      reject("Descuento no válido")
    }



  })

  descuentoAplicado
    .then((resultado) => {
      console.log(resultado)
    })
    .catch((error) => {
      console.log(error)
    })
  return (
    <div> {greeting} </div>
  )
}

export default ItemListContainer