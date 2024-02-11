import React, { createContext, useContext, useState } from 'react';



export const CartContext = createContext()
export const ShoppingCartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])

    
    const addToCart = (producto,contador) => {
        for(let i=0;i<contador;i++){
            setCartItems((prevItems)=>[ ...prevItems,producto])
        }
        
    }
    const removeFromCart = (itemIndex) => {
        setCartItems((prevItems) =>
          prevItems.filter((_, index) => index !== itemIndex)
        );
      };
    
      const clearCart = () => {
        setCartItems([]);
      };
    
      // Step 3: Provide the context values
      const contextValues = {
        cartItems: cartItems || [],
        addToCart,
        removeFromCart,
        clearCart,
      };
    
      return <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>;
    };
    // Step 4: Create a Hook to use the Context
    export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  };

    /*const [contador, setContador] = useState(0)


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



    const comision = "Palabra"
    

    return (

        <CartContext.Provider value={{ comision, cart, setCart }}>
            {children}
        </CartContext.Provider>
// , sumar, restar, addCart, quantityInCart


    )
*/

export default ShoppingCartProvider