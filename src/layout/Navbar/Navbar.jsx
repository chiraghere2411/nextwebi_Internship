import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../components/Context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isDinePage = location.pathname === '/dine';

  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/assets/logo 2.png" alt="Logo" style={{ height: '50px', width: 'auto' }} />
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/dine">Menu</Link>
        <Link to="">Contact</Link>
        <Link to="/dine">
          <button className="dinebtn">Dine in</button>
        </Link>

        {isDinePage && (
          <Link to="/cart" className="cart-link">
            <img src="/assets/cart.png" alt="Cart" className="cart-icon" />
            {totalQuantity > 0 && (
              <span className="carticon-badge">{totalQuantity}</span>
            )}
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
