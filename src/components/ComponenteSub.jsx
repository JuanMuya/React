import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'


const ComponenteSub = () => {

    const { comision, cart, setCart } = useContext(CartContext)
    //  console.log(cart)




    return (
        <>
            <h1>{cart} </h1>
            <p>{comision} </p>

            <button onClick={() => setCart("Nuevo Valor")} >Cambiar Valor </button>



        </>
    )
}

export default ComponenteSub