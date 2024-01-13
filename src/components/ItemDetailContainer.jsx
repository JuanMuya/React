import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const { id } = useParams()

    const productos = [
        { id: 1, titulo: "Camisetas normales hombre", description: "100% Algodón", precio: 890, categoria: "A" },
        { id: 2, titulo: "Camisetas especiales hombre", description: "100% Algodón con estampas", precio: 1340, categoria: "A" },
        { id: 3, titulo: "Calzado hombre", description: "100% Algodón", precio: 890, categoria: "A" },
        { id: 4, titulo: "Camisetas normales mujer", description: "100% Algodón con estampas", precio: 1340, categoria: "B" },
        { id: 5, titulo: "Camisetas especiales mujer", description: "100% Algodón", precio: 890, categoria: "B" },
        { id: 6, titulo: "Calzado mujer", description: "100% Algodón con estampas", precio: 1340, categoria: "B" },
        { id: 7, titulo: "Juguetes", description: "Figuras coleccionables", precio: 550, categoria: "C" }
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

    const productoFiltrado = productos.find((producto) => producto.id == id)



    return (
        <div>

            <ItemDetail
                producto={productoFiltrado}

            />

        </div>

    )

}


export default ItemDetailContainer