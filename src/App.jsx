import React from 'react';
import { CartProvider } from './components/Context/CartContext';
import Home from './pages/Home';
import Dine from './pages/Dine';
import Carts from './pages/Carts';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dine" element={<Dine />} />
            <Route path="/cart" element={<Carts />} />
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
