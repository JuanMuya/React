import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {

  const producos = [
    { id: 1, titulo: "Camisetas normales", description: "100% Algodón", precio: 890 },
    { id: 2, titulo: "Camisetas raras", description: "100% Algodón con estampas", precio: 1340 },
    { id: 3, titulo: "Juguetes", description: "Figuras coleccionables", precio: 550 }
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