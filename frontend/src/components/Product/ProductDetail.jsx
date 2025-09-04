import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/useCart';
import { productAPI } from '../../services/api';
import LoadingSpinner from '../common/LoadingSpinner';

const ProductDetail = ({ product: initialProduct, onBack }) => {
  const [product, setProduct] = useState(initialProduct);
  const [loading, setLoading] = useState(!initialProduct);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    if (!initialProduct && window.location.pathname.includes('/product/')) {
      // If we don't have the product data, fetch it
      const productId = window.location.pathname.split('/product/')[1];
      fetchProduct(productId);
    }
  }, [initialProduct]);

  const fetchProduct = async (productId) => {
    try {
      setLoading(true);
      const response = await productAPI.getProductById(productId);
      setProduct(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to load product details');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="container">
        <div className="card text-center">
          <h2>Error Loading Product</h2>
          <p>{error}</p>
          <button className="btn btn-primary" onClick={onBack}>
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="container">
      <button className="btn btn-secondary mb-3" onClick={onBack}>
        ← Back to Products
      </button>
      
      <div className="card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }} className="product-detail-grid">
          {/* Product Image */}
          <div>
            <img 
              src={product.image} 
              alt={product.name}
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </div>
          
          {/* Product Info */}
          <div>
            <div className="product-brand mb-1">{product.brand}</div>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{product.name}</h1>
            <div className="product-price" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              ${product.price}
            </div>
            
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              {product.description}
            </p>
            
            {/* Specifications */}
            {product.specifications && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>Specifications:</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {product.specifications.storage && (
                    <li><strong>Storage:</strong> {product.specifications.storage}</li>
                  )}
                  {product.specifications.color && (
                    <li><strong>Color:</strong> {product.specifications.color}</li>
                  )}
                  {product.specifications.screenSize && (
                    <li><strong>Screen Size:</strong> {product.specifications.screenSize}</li>
                  )}
                  {product.specifications.compatibility && (
                    <li><strong>Compatible with:</strong> {product.specifications.compatibility.join(', ')}</li>
                  )}
                </ul>
              </div>
            )}
            
            <div style={{ marginBottom: '1rem' }}>
              <strong>Stock: </strong>
              <span style={{ color: product.stock > 10 ? 'green' : product.stock > 0 ? 'orange' : 'red' }}>
                {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
              </span>
            </div>
            
            {product.stock > 0 && (
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div>
                  <label className="form-label">Quantity:</label>
                  <select 
                    className="form-input" 
                    style={{ width: '80px' }}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  >
                    {[...Array(Math.min(5, product.stock))].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;