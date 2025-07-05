import React, { useEffect } from 'react';
import { CartProvider } from './components/Context/CartContext';
import Home from './pages/Home';
import Dine from './pages/Dine';
import Carts from './pages/Carts';
import Checkout from './pages/Checkout';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid'; 

function App() {
  useEffect(() => {
    if (!Cookies.get('sessionId')) {
      const newSessionId = uuidv4();
      Cookies.set('sessionId', newSessionId, { expires: 7 });
      console.log('New Session ID created:', newSessionId);
    } else {
      console.log('Existing Session ID:', Cookies.get('sessionId'));
    }
  }, []);

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

      {/* Toast container outside provider */}
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
