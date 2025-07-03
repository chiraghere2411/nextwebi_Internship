import React from 'react';
import Layout from '../layout/Layout';
import { useCart } from '../components/Context/CartContext';
import '../global.css'; 

const Carts = () => {
  const { cartItems, updateItemQuantity, removeItem } = useCart();

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const increaseQuantity = (index) => {
    const item = cartItems[index];
    updateItemQuantity(index, item.quantity + 1);
  };

  const decreaseQuantity = (index) => {
    const item = cartItems[index];
    updateItemQuantity(index, item.quantity - 1);
  };

  return (
    <Layout>
      <div className="cart-wrapper">
        <h1 className="cart-heading"> Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty. Go add some delicious Food!</p>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div className="cart-card" key={item.name}>
                  <img src={item.image} alt={item.name} className="cart-image" />

                  <div className="cart-info">
                    <div className="cart-title">
                      <h3>{item.name}</h3>
                      
                    </div>

                    <div className="cart-row">
                      <span className="cart-price">₹{item.price}</span>
                      <div className="quantity-buttons">
                        <button onClick={() => decreaseQuantity(index)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(index)}>+</button>
                      </div>
                    </div>

                    <div className="cart-row">
                      <span className="total-label">Total:</span>
                      <span className="total-price">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>

                    <button className="remove-btn" onClick={() => removeItem(index)}>
                      ✖ Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Subtotal</h2>
              <p className="summary-price">₹{getTotalPrice().toFixed(2)}</p>
              <button className="checkout-button">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Carts;