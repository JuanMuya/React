import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'


const ComponenteSub = () => {

    const { comision, cart, setCart } = useContext(CartContext)
   
    //  console.log(cart)




    return (
        <>


            <button onClick={() => setCart("Nuevo Valor")} >Cambiar Valor </button>



        </>
    )
}

export default ComponenteSub