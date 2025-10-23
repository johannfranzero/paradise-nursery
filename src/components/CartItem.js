import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    updateQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const totalPrice = item.price * item.quantity;

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      
      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-category">{item.category}</p>
        <p className="cart-item-price">${item.price} each</p>
      </div>

      <div className="cart-item-controls">
        <div className="quantity-controls">
          <button 
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="quantity">{item.quantity}</span>
          <button onClick={() => handleQuantityChange(item.quantity + 1)}>
            +
          </button>
        </div>
        
        <div className="cart-item-total">
          ${totalPrice.toFixed(2)}
        </div>

        <button 
          className="remove-btn"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
