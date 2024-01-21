import { createContext, useState } from "react";


export const CartContext = createContext(null)

export const ShoppingCartProvider = ({chilldren}) => {

const comision = "Palabra"



return(
    <CartContext.Provider value={{comision}}>
        {chilldren}
    </CartContext.Provider>
)

}

export default ShoppingCartProvider