import React from 'react';
import { useCart } from '../../context/useCart';
import { useAuth } from '../../context/useAuth';

const Cart = ({ onBack }) => {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const { user } = useAuth();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="container">
        <button className="btn btn-secondary mb-3" onClick={onBack}>
          ← Continue Shopping
        </button>
        
        <div className="card text-center">
          <h2>Your Cart is Empty</h2>
          <p>Add some products to get started!</p>
          <button className="btn btn-primary" onClick={onBack}>
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <button className="btn btn-secondary mb-3" onClick={onBack}>
        ← Continue Shopping
      </button>
      
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Shopping Cart ({cart.length} items)</h2>
          <button 
            className="btn btn-secondary btn-sm"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>

        {/* Cart Items */}
        <div style={{ marginBottom: '2rem' }}>
          {cart.map((item) => (
            <div 
              key={item._id}
              className="cart-item"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '1rem 0', 
                borderBottom: '1px solid var(--border-color)' 
              }}
            >
              <img 
                src={item.image} 
                alt={item.name}
                style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '1rem' }}
              />
              
              <div style={{ flex: 1 }}>
                <h4>{item.name}</h4>
                <p className="product-brand">{item.brand}</p>
                <p className="product-price">${item.price}</p>
              </div>
              
              <div className="cart-item-controls" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button 
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                    style={{ width: '30px', height: '30px', padding: '0' }}
                  >
                    -
                  </button>
                  <span style={{ minWidth: '20px', textAlign: 'center' }}>
                    {item.quantity}
                  </span>
                  <button 
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                    style={{ width: '30px', height: '30px', padding: '0' }}
                  >
                    +
                  </button>
                </div>
                
                <div style={{ minWidth: '80px', textAlign: 'right' }}>
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                </div>
                
                <button 
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div style={{ textAlign: 'right', paddingTop: '1rem', borderTop: '2px solid var(--border-color)' }}>
          <h3>Total: ${getCartTotal().toFixed(2)}</h3>
          
          {user ? (
            <button className="btn btn-primary btn-lg mt-2">
              Proceed to Checkout
            </button>
          ) : (
            <div className="mt-2">
              <p>Please log in to checkout</p>
              <button className="btn btn-primary">
                Login to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;