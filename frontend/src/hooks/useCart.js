import React, { createContext, useContext, useEffect, useState } from "react";
import { sample_shoes } from "../Data";


const CartContext = createContext(null)

export default function CartProvider({children}) {

    const [cartItems, setCartItems] = useState(sample_shoes.slice(1,4)
    .map(shoe => ({shoe, quantity: 1, price: shoe.price })));
    const [totalPrice, setTotalPrice ] = useState(30);
    const [totalCount, setTotalCount] = useState(3);

    useEffect(() => {
      const totalPrice = sum(cartItems.map(item => item.price));
      const totalCount = sum(cartItems.map(item => item.quantity));
      setTotalPrice(totalPrice);
      setTotalCount(totalCount);
    }, [cartItems]);

    const sum = items => {
      return items.reduce((prevValue, curValue) => prevValue + curValue, 0);
    };

    const removeFromCart = shoeId => {
      const filteredCartItems = cartItems.filter(item => item.shoe.id !== shoeId);
      setCartItems(filteredCartItems);
    };

    const changeQuantity = (cartItem, newQuantity) => {
      const { shoe } = cartItem;

      const changedCartItem = {
        ...cartItem,
        quantity: newQuantity,
        price: shoe.price * newQuantity
      };

      setCartItems(
        cartItems.map(item => (item.shoe.id === shoe.id ? changedCartItem : item))
      );
    }

    const addToCart = shoe => {
      const cartItem = cartItems.find( item => item.shoe.id === shoe.id);
      if(cartItem) {
        changeQuantity(cartItem, cartItem.quantity + 1);
      } else {
        setCartItems([...cartItems,{ shoe, quantity: 1, price: shoe.price }]);
      }
    };


    return (
        <CartContext.Provider value={{cart:{items: cartItems, totalPrice, totalCount},
        removeFromCart, changeQuantity, addToCart,
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext)