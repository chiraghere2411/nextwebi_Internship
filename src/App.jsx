import React from 'react';
import { CartProvider } from './components/Context/CartContext';
import Home from './pages/Home';
import Dine from './pages/Dine';
import Carts from './pages/Carts';
import Checkout from './pages/Checkout';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <div className="App">
            <Routes>
              
              <Route path="/" element={<Home />} />
              <Route path="/dine" element={<Dine />} />
              <Route path="/cart" element={<Carts />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>

      {/* Toast Container - Must be outside of provider to be global */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
