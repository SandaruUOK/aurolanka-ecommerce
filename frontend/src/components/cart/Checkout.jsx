import React, { useState } from 'react';
import { useCart } from '../../context/useCart';
import { useAuth } from '../../context/useAuth';

const Checkout = ({ onBack, onOrderComplete }) => {
  const { cart, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'card'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate order processing delay
    setTimeout(() => {
      const orderData = {
        orderId: `ORD-${Date.now()}`,
        items: cart,
        total: getCartTotal(),
        customer: formData,
        orderDate: new Date().toISOString(),
        status: 'confirmed'
      };

      // In a real app, you'd send this to your backend
      console.log('Order placed:', orderData);
      
      // Clear cart and show success
      clearCart();
      onOrderComplete(orderData);
      setLoading(false);
    }, 2000);
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="container">
      <button className="btn btn-secondary mb-3" onClick={onBack}>
        ← Back to Cart
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '2rem', alignItems: 'start' }}>
        {/* Checkout Form */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Checkout</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <h3 style={{ marginBottom: '1rem' }}>Shipping Information</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  className="form-input"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">City:</label>
                <input
                  type="text"
                  name="city"
                  className="form-input"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Address:</label>
              <input
                type="text"
                name="address"
                className="form-input"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street address"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Zip Code:</label>
              <input
                type="text"
                name="zipCode"
                className="form-input"
                value={formData.zipCode}
                onChange={handleChange}
                style={{ width: '200px' }}
                required
              />
            </div>
            
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Payment Method</h3>
            
            <div className="form-group">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <label style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  cursor: 'pointer',
                  padding: '1rem',
                  border: formData.paymentMethod === 'card' ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                  borderRadius: '8px',
                  backgroundColor: formData.paymentMethod === 'card' ? '#f0f9ff' : 'white'
                }}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleChange}
                    style={{ marginRight: '12px', marginLeft: '0' }}
                  />
                  <span style={{ fontWeight: '500' }}>💳 Credit/Debit Card</span>
                </label>
                
                <label style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '1rem',
                  border: formData.paymentMethod === 'cash' ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                  borderRadius: '8px',
                  backgroundColor: formData.paymentMethod === 'cash' ? '#f0f9ff' : 'white'
                }}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === 'cash'}
                    onChange={handleChange}
                    style={{ marginRight: '0px' }}
                  />
                  <span style={{ fontWeight: '500' }}>💵 Cash on Delivery</span>
                </label>
                
                <label style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '1rem',
                  border: formData.paymentMethod === 'bank' ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                  borderRadius: '8px',
                  backgroundColor: formData.paymentMethod === 'bank' ? '#f0f9ff' : 'white'
                }}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={formData.paymentMethod === 'bank'}
                    onChange={handleChange}
                    style={{ marginRight: '12px' }}
                  />
                  <span style={{ fontWeight: '500' }}>🏦 Bank Transfer</span>
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-lg"
              style={{ width: '100%', marginTop: '2rem' }}
              disabled={loading}
            >
              {loading ? 'Processing Order...' : `Place Order - $${total.toFixed(2)}`}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Order Summary</h3>
          </div>

          {/* Items */}
          <div style={{ marginBottom: '1rem' }}>
            {cart.map((item) => (
              <div key={item._id} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '0.5rem 0',
                borderBottom: '1px solid #e5e7eb'
              }}>
                <div>
                  <div style={{ fontWeight: '500' }}>{item.name}</div>
                  <div style={{ fontSize: '0.875rem', color: '#666' }}>
                    Qty: {item.quantity}
                  </div>
                </div>
                <div style={{ fontWeight: '500' }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div style={{ borderTop: '2px solid #e5e7eb', paddingTop: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Shipping:</span>
              <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Tax (8%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              fontSize: '1.25rem',
              fontWeight: 'bold',
              borderTop: '1px solid #e5e7eb',
              paddingTop: '0.5rem',
              marginTop: '0.5rem'
            }}>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {shipping === 0 && (
            <div style={{ 
              backgroundColor: '#f0f9ff', 
              color: '#0369a1', 
              padding: '0.5rem',
              borderRadius: '4px',
              fontSize: '0.875rem',
              marginTop: '1rem'
            }}>
              🎉 You qualify for FREE shipping!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;