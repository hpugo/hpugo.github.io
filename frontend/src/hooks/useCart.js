import React, { createContext, useContext, useState } from "react";
import { sample_shoes } from "../Data";


const CartContext = createContext(null)

export default function CartProvider({children}) {

    const [cartItems, setCartItems] = useState(sample_shoes.slice(1,4)
    .map(shoe => ({shoe, quantity: 1, price: shoe.price })));
    const [totalPrice, setTotalPrice ] = useState(30);
    const [totalCount, setTotalCount] = useState(3);

    return (
        <CartContext.Provider value={{cart:{items: cartItems, totalPrice, totalCount}}}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext)