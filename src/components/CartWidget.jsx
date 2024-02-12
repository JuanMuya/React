import React from 'react'
import { useCart } from '../context/ShoppingCartContext'

import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
    const { cartItems} = useCart();
    return (
        <div>


            <AiOutlineShoppingCart />
            {cartItems.length}
        </div>
    )
}

export default CartWidget