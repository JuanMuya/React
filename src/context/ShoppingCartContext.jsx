import { createContext, useState } from "react";

export const CartContext = createContext(null)
export const ShoppingCartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const comision = "Palabra"


    return (

        <CartContext.Provider value={{ comision, cart, setCart }}>
            {children}
        </CartContext.Provider>

    )
}

export default ShoppingCartProvider