import React, { useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const { categoriaId } = useParams()
  console.log(categoriaId)

  const productos = [
    { id: 1, titulo: "Camisetas normales hombre", description: "100% Algodón", precio: 890, categoria: "A" },
    { id: 2, titulo: "Camisetas especiales hombre", description: "100% Algodón con estampas", precio: 1340, categoria: "A" },
    { id: 3, titulo: "Calzado hombre", description: "100% Algodón", precio: 890, categoria: "A" },
    { id: 4, titulo: "Camisetas normales mujer", description: "100% Algodón con estampas", precio: 1340, categoria: "B" },
    { id: 5, titulo: "Camisetas especiales mujer", description: "100% Algodón", precio: 890, categoria: "B" },
    { id: 6, titulo: "Calzado mujer", description: "100% Algodón con estampas", precio: 1340, categoria: "B" },
    { id: 7, titulo: "Juguetes", description: "Figuras coleccionables", precio: 550, categoria: "C" }
  ]

  const verProductos = new Promise((resolve, reject) => {

    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 550)
    } else {
      reject("No se obtuvo resultado")
    }
  })

  verProductos
    .then((resultado) => {
      //  console.log(resultado)
    })
    .catch((error) => {
      //   console.log(error)
    })

  const productosFiltrados = productos.filter(function (producto) {
    return producto.categoria == categoriaId
  })
  console.log(productosFiltrados)


  return (
    <div>
      {
        categoriaId ? <ItemList productos={productosFiltrados} /> : <ItemList productos={productos} />

      }
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