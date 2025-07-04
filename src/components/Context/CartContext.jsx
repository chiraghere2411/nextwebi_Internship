import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // ✅ Load cart items from cookies when the app starts
  const [cartItems, setCartItems] = useState(() => {
    const stored = Cookies.get('cartItems');
    return stored ? JSON.parse(stored) : [];
  });

  // ✅ Save cart items to cookies whenever they change
  useEffect(() => {
    Cookies.set('cartItems', JSON.stringify(cartItems), { expires: 7 });
  }, [cartItems]);

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
