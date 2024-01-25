import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'




const Cart = () => {
  const { comision, cart, setCart } = useContext(CartContext);

  return (
    <div>{cart} </div>
  )
}

export default Cart