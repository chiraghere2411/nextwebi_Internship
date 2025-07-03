import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const setItemQuantityByName = (name, newQuantity, itemDetails = {}) => {
    setCartItems((prev) => {
      const index = prev.findIndex((i) => i.name === name);

      if (newQuantity <= 0) {
        return prev.filter((_, i) => i !== index);
      }
      if (index !== -1) {
        const updated = [...prev];
        updated[index].quantity = newQuantity;
        return updated;
      } else {
        return [...prev, { ...itemDetails, name, quantity: newQuantity }];
      }
    });
  };

  const updateItemQuantity = (index, newQuantity) => {
    setCartItems((prev) => {
      if (newQuantity < 1) {
        return prev.filter((_, i) => i !== index);
      }
      const updated = [...prev];
      updated[index].quantity = newQuantity;
      return updated;
    });
  };

  const removeItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setItemQuantityByName,
        updateItemQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
