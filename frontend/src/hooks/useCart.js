import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);
const CART_KEY = 'cart';
const EMPTY_CART = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

export default function CartProvider({ children }) {
  const initCart = getCartFromLocalStorage();
const [cartItems, setCartItems] = useState(initCart.items || []);
const [totalPrice, setTotalPrice] = useState(initCart.totalPrice || 0);
const [totalCount, setTotalCount] = useState(initCart.totalCount || 0);


  useEffect(() => {
    const totalPrice = sum(cartItems.map((item) => item.price));
    const totalCount = sum(cartItems.map((item) => item.quantity));
    setTotalPrice(totalPrice);
    setTotalCount(totalCount);

    localStorage.setItem(
      CART_KEY,
      JSON.stringify({
        items: cartItems,
        totalPrice,
        totalCount,
      })
    );
  }, [cartItems]);

  function getCartFromLocalStorage() {
    try {
      const storedCart = localStorage.getItem(CART_KEY);
      return storedCart ? JSON.parse(storedCart) : EMPTY_CART;
    } catch (error) {
      console.error('Error retrieving cart from local storage:', error);
      return EMPTY_CART;
    }
  }

  const sum = (items) => {
    return items.reduce((prevValue, curValue) => prevValue + curValue, 0);
  };

  const removeFromCart = (shoeId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.shoe.id !== shoeId)
    );
  };

  const changeQuantity = (cartItem, newQuantity) => {
    const { shoe } = cartItem;

    const changedCartItem = {
      ...cartItem,
      quantity: newQuantity,
      price: shoe.price * newQuantity,
    };

    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.shoe.id === shoe.id ? changedCartItem : item
      )
    );
  };

  const addToCart = (shoe) => {
    const cartItem = cartItems.find((item) => item.shoe.id === shoe.id);
    if (cartItem) {
      changeQuantity(cartItem, cartItem.quantity + 1);
    } else {
      setCartItems([...cartItems, { shoe, quantity: 1, price: shoe.price }]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: { items: cartItems, totalPrice, totalCount },
        removeFromCart,
        changeQuantity,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
