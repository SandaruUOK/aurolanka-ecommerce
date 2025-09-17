import React from 'react';

const OrderSuccess = ({ orderData, onContinueShopping }) => {
  return (
    <div className="container">
      <div className="card text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
        
        <h1 style={{ color: '#10b981', marginBottom: '1rem' }}>Order Placed Successfully!</h1>
        
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
          Thank you for your order. We've sent a confirmation email to your inbox.
        </p>

        <div style={{ 
          backgroundColor: '#f9fafb', 
          padding: '1.5rem', 
          borderRadius: '8px',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Order Details</h3>
          
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Order ID:</strong> {orderData.orderId}
          </div>
          
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Total Amount:</strong> ${orderData.total.toFixed(2)}
          </div>
          
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Items:</strong> {orderData.items.length} product(s)
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <strong>Delivery Address:</strong><br />
            {orderData.customer.fullName}<br />
            {orderData.customer.address}<br />
            {orderData.customer.city}, {orderData.customer.zipCode}
          </div>

          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Payment Method:</strong> {
              orderData.customer.paymentMethod === 'card' ? 'Credit/Debit Card' :
              orderData.customer.paymentMethod === 'cash' ? 'Cash on Delivery' :
              'Bank Transfer'
            }
          </div>
        </div>

        <div style={{ 
          backgroundColor: '#fef3c7', 
          color: '#92400e',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '2rem',
          fontSize: '0.9rem'
        }}>
          📦 <strong>Estimated Delivery:</strong> 3-5 business days<br />
          📧 <strong>Tracking info</strong> will be sent to {orderData.customer.email}
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            className="btn btn-primary btn-lg"
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>
          
          <button 
            className="btn btn-secondary btn-lg"
            onClick={() => window.print()}
          >
            Print Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;