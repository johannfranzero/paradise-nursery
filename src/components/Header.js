import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart } = useCart();
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          🌿 Paradise Nursery
        </Link>
        
        <nav className="nav">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={location.pathname === '/products' ? 'nav-link active' : 'nav-link'}
          >
            Plants
          </Link>
          <Link 
            to="/cart" 
            className={location.pathname === '/cart' ? 'nav-link active' : 'nav-link'}
          >
            Cart ({cart.totalItems})
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
