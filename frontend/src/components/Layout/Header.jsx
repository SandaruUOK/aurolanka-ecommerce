import React from 'react';
import { useCart } from '../../context/useCart';
import { useAuth } from '../../context/useAuth';

const Header = ({ onCartClick, onLoginClick,onAdminClick }) => {
  const { getCartCount } = useCart();
  const { user, logout } = useAuth();
  const cartCount = getCartCount();

  return (
    <header style={{
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      width: '100%'
    }}>
      <div className="container">
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 0',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <a href="/" style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#3b82f6',
            textDecoration: 'none'
          }}>AuroLanka</a>
          
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '1.5rem',
            margin: 0,
            padding: 0,
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <li><a href="/" style={{ textDecoration: 'none', color: '#333' }}>Home</a></li>
            <li><a href="#phones" style={{ textDecoration: 'none', color: '#333' }}>Phones</a></li>
            <li><a href="#accessories" style={{ textDecoration: 'none', color: '#333' }}>Accessories</a></li>
            
            <li>
              <button 
                className="btn btn-secondary"
                onClick={onCartClick}
                style={{ fontSize: '0.9rem' }}
              >
                Cart ({cartCount})
              </button>
            </li>
            
            {user ? (
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem' }}>Hi, {user.name}</span>
                <button 
                  className="btn btn-secondary"
                  onClick={logout}
                  style={{ fontSize: '0.9rem' }}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <button 
                  className="btn btn-primary"
                  onClick={onLoginClick}
                  style={{ fontSize: '0.9rem' }}
                >
                  Login
                </button>
              </li>
            )}
            {user && user.role === 'admin' && (
  <li>
    <button 
      className="btn btn-secondary"
      onClick={onAdminClick}
      style={{ fontSize: '0.9rem' }}
    >
      Admin Panel
    </button>
  </li>
)}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;