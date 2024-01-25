import { createContext, useState } from "react";



export const CartContext = createContext(false)
export const ShoppingCartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

   {/* const addCart = (producto, contador) => {
        const addItem = { ...producto, contador }

        const cartNew = [...cart]

        const cartContenido = cart.find((producto) => producto.id === addItem)
        if (cartContenido) {
            cartContenido.contador += contador
        } else {
            cartNew.push(addItem)
        }
        setCart([...cart, addItem])
    }


    const [contador, setContador] = useState(0)


    const mostrarMensaje = () => {
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

    const quantityInCart = () => {
        return cart.reduce((acc, producto) => acc + producto.contador, 0)
    }

*/}

    const comision = "Palabra"


    return (

        <CartContext.Provider value={{ comision, cart, setCart}}>
            {children}
        </CartContext.Provider>

    )
}

export default ShoppingCartProvider