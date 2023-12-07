import React, { useEffect, useState } from 'react'

const ItemCaunt = () => {

    const [Contador, setContador] = useState(0)
    const [Mensaje, setMensaje] = useState("Finalizar Compra?")

    useEffect(() => {

    }, [Contador])

    return (
        <div>

            <h1>Contador</h1>
            <h2> {Contador} </h2>
            <button onClick={() => setContador(Contador + 1)}>+</button>
            <button onClick={() => setContador(Contador - 1)}>-</button>

            <h3> {Mensaje} </h3>
            <button onClick={() => setMensaje("Compra Finalizada")}>Comprar</button>

        </div>
    )
}

export default ItemCaunt