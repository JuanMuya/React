import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const producos = [
        { id: 1, titulo: "Camisetass normales", description: "100% Algodón", precio: 890 },
        { id: 2, titulo: "Camisetass raras", description: "100% Algodón con estampas", precio: 1340 },
        { id: 3, titulo: "Juguetess", description: "Figuras coleccionables", precio: 550 }
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
            {
                producos.map((p) => {
                    return (
                        <ItemDetail
                            titulo={p.titulo}
                            descripcion={p.descripcion}
                            precio={p.precio}
                        />
                    )



                })

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

export default ItemDetailContainer