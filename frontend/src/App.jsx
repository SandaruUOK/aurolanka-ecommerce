import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/useAuth';
import { CartProvider } from './context/CartContext';
import { useCart } from './context/useCart';
import AdminDashboard from './components/Admin/AdminDashboard';
import Header from './components/Layout/Header';
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/Product/ProductDetail';
import Cart from './components/Cart/Cart';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Footer from './components/Layout/Footer';
import { productAPI } from './services/api';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'


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
  };

  const handleCartClick = () => {
    setCurrentView('cart');
  };

  const handleLoginClick = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    setCurrentView('home');
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
        return <Cart onBack={handleBackToHome} />;

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
          
          {showAuthModal && (
            <div className="modal-overlay" onClick={() => setShowAuthModal(false)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button 
                  className="modal-close"
                  onClick={() => setShowAuthModal(false)}
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
          )}
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;