import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/useAuth';
import { CartProvider } from './context/CartContext';
import { useCart } from './context/useCart';
import AdminDashboard from './components/Admin/AdminDashboard';
import Header from './components/Layout/Header';
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/Product/ProductDetail';
import Cart from './components/cart/Cart';
import Checkout from './components/cart/Checkout';
import OrderSuccess from './components/cart/OrderSuccess';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Footer from './components/Layout/Footer';
import { productAPI } from './services/api';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  const [orderData, setOrderData] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
  };

  const handleAdminClick = () => {
    setCurrentView('admin');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProduct(null);
    setOrderData(null);
  };

  const handleCartClick = () => {
    setCurrentView('cart');
  };

  const handleCheckoutClick = () => {
    setCurrentView('checkout');
  };

  const handleLoginClick = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    // Don't change view, stay where user was
  };

  const handleOrderComplete = (orderData) => {
    setOrderData(orderData);
    setCurrentView('order-success');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <ProductList onProductClick={handleProductClick} />;
        
      case 'product-detail':
        return (
          <ProductDetail 
            product={selectedProduct} 
            onBack={handleBackToHome}
          />
        );
        
      case 'cart':
        return (
          <Cart 
            onBack={handleBackToHome} 
            onCheckout={handleCheckoutClick}
          />
        );

      case 'checkout':
        return (
          <Checkout 
            onBack={() => setCurrentView('cart')}
            onOrderComplete={handleOrderComplete}
          />
        );

      case 'order-success':
        return (
          <OrderSuccess 
            orderData={orderData}
            onContinueShopping={handleBackToHome}
          />
        );

      case 'admin':
        return <AdminDashboard onBack={handleBackToHome} />;
        
      default:
        return <ProductList onProductClick={handleProductClick} />;
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header 
            onCartClick={handleCartClick}
            onLoginClick={handleLoginClick}
            onAdminClick={handleAdminClick} 
          />
          
          <main style={{ flex: 1 }}>
            {renderCurrentView()}
          </main>

          <Footer />
          
          {/* Fixed Modal Portal */}
          {showAuthModal && (
            <>
              <div 
                className="modal-overlay" 
                onClick={() => setShowAuthModal(false)}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 1000,
                  padding: '1rem',
                  backdropFilter: 'blur(4px)'
                }}
              >
                <div 
                  className="modal-content" 
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '16px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    maxWidth: '420px',
                    width: '100%',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    position: 'relative',
                    animation: 'modalEnter 0.3s ease-out'
                  }}
                >
                  <button 
                    className="modal-close"
                    onClick={() => setShowAuthModal(false)}
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(0, 0, 0, 0.05)',
                      border: 'none',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                      color: '#6b7280',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      transition: 'all 0.2s ease',
                      fontWeight: '300'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(0, 0, 0, 0.1)';
                      e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(0, 0, 0, 0.05)';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    ×
                  </button>
                  
                  {authMode === 'login' ? (
                    <Login 
                      onSuccess={handleAuthSuccess}
                      onSwitchToSignUp={() => setAuthMode('signup')}
                    />
                  ) : (
                    <SignUp 
                      onSuccess={handleAuthSuccess}
                      onSwitchToLogin={() => setAuthMode('login')}
                    />
                  )}
                </div>
              </div>

              {/* Add keyframes for animation */}
              <style jsx>{`
                @keyframes modalEnter {
                  from {
                    opacity: 0;
                    transform: scale(0.9) translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                  }
                }
              `}</style>
            </>
          )}
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;