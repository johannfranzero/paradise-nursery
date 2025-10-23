import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart, clearCart } = useCart();

  const handleCheckout = () => {
    alert('Thank you for your purchase! This is a demo application.');
    clearCart();
  };

  if (cart.items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <h1 className="page-title">Shopping Cart</h1>
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Start adding some beautiful plants to your cart!</p>
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">Shopping Cart</h1>
        
        <div className="cart-summary">
          <div className="cart-stats">
            <p>Total Items: <strong>{cart.totalItems}</strong></p>
            <p>Total Price: <strong>${cart.totalPrice.toFixed(2)}</strong></p>
          </div>
        </div>

        <div className="cart-items">
          {cart.items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="cart-actions">
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
