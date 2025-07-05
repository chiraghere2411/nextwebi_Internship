import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useCart } from '../components/Context/CartContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import '../global.css';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate(); 

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);


  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { name, phone, address };
    Cookies.set('userInfo', JSON.stringify(userData), { expires: 7 });

    toast.success('Thank you! Order placed successfully');

    console.log('User:', userData);
    console.log('Cart:', cartItems);

    clearCart();
    setName('');
    setPhone('');
    setAddress('');

    setTimeout(() => {
      navigate('/dine');
    }, 2000);
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>

        <h3>Order Summary</h3>
        <ul className="order-list">
          {cartItems.map((item, i) => (
            <li key={i}>
              {item.name} × {item.quantity} — ₹{item.price * item.quantity}
            </li>
          ))}
        </ul>

        <div className="checkout-total">Total: ₹{total.toFixed(2)}</div>

        <button type="submit" className="checkout-button">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
