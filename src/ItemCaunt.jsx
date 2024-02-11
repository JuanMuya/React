import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { CartContext } from './context/ShoppingCartContext'
import React, { useContext } from 'react'
import { useCart } from './context/ShoppingCartContext'

const ItemCaunt = ({ producto }) => {

    //const { addCart, cart } = useContext(CartContext)
    const { cartItems, addToCart, removeFromCart, clearCart } = useCart();
    const [contador, setContador] = useState(0)


    const mostrarMensaje = () => {
        addToCart(producto,contador);
        alert(`Agregado al carrito ${contador} unidades `)
    }
    const sumar = () => {
        if (contador < 10) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }




    return (
        <div>
            <Button colorScheme='teal' size='xs' onClick={sumar}>
                +
            </Button>
            <Button onClick={mostrarMensaje}>
                Añadir al carrito {contador}
            </Button>

            <Button colorScheme='teal' size='xs' onClick={restar}>
                -
            </Button>

        </div>
    )
}

export default ItemCaunt