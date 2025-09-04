/*import React from 'react';
import { useCart } from '../../context/useCart';

const ProductCard = ({ product, onClick }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent card click when clicking button
    addToCart(product);
  };

  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <img 
        src={product.image} 
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <div className="product-brand">{product.brand}</div>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-price">${product.price}</div>
        <button 
          className="btn btn-primary btn-sm"
          onClick={handleAddToCart}
          style={{ width: '100%' }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;*/
import React from 'react';
import { useCart } from '../../context/useCart';

const ProductCard = ({ product, onClick }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div 
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        display: 'flex',
        flexDirection: 'column'
      }}
      onClick={() => onClick(product)}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-4px)';
        e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
      }}
    >
      <img 
        src={product.image} 
        alt={product.name}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '1rem'
        }}
      />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <p style={{
          color: '#666',
          fontSize: '0.85rem',
          textTransform: 'uppercase',
          fontWeight: '600',
          marginBottom: '0.5rem'
        }}>{product.brand}</p>
        <h3 style={{
          fontSize: '1.1rem',
          fontWeight: '600',
          marginBottom: '0.5rem',
          flex: 1
        }}>{product.name}</h3>
        <p style={{
          color: '#3b82f6',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          marginBottom: '1rem'
        }}>${product.price}</p>
        <button 
          className="btn btn-primary"
          style={{ width: '100%' }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;