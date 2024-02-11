import React from 'react'
import { useContext } from 'react'
import { useCart } from '../context/ShoppingCartContext'




const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <div>
    <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.titulo}{' '}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => clearCart()}>Clear Cart</button>
      </div>
  )
}

export default Cart